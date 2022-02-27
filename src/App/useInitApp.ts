import { initializeApp } from "firebase/app";
import { useEffect, useRef, useState } from "react";
import { updateUser } from "services/auth/auth";
import { useSetter } from "store/accessors";
import { getAuth } from "firebase/auth";
import { setProfileLoading, updateProfile } from "services/profile/profile";
import {
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  Unsubscribe as FireStoreUnsubscribe,
  collection,
} from "firebase/firestore";
import { tables } from "constants/tables";
import { Product, Profile } from "types/types";
import createConverter from "helpers/createConverter";
import { updateProducts } from "services/products/products";
export default function useInitApp() {
  const [loading, setLoading] = useState(true);
  const profileSubscribeRef = useRef<FireStoreUnsubscribe>();
  const authSubscribeRef = useRef<FireStoreUnsubscribe>();
  const dispatch = useSetter();

  useEffect(() => {
    initializeApp({
      apiKey: "AIzaSyCqYcqebQhMqIOBWQYVTReLhYwIf9cEvLE",
      authDomain: "bernard-water.firebaseapp.com",
      projectId: "bernard-water",
      storageBucket: "bernard-water.appspot.com",
      messagingSenderId: "664269595028",
      appId: "1:664269595028:web:946e74cd2d4708ecaaef81",
    });

    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      const { photoURL, displayName, phoneNumber, uid } = currentUser;
      dispatch(updateUser({ photoURL, displayName, phoneNumber, uid }));
    }
    //subscribe auth
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        dispatch(updateUser(null));
      } else {
        dispatch(
          updateUser({
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            uid: user.uid,
          })
        );

        //subscribe to profile change
        const db = getFirestore();
        const profileDocRef = doc(db, tables.users, user.uid).withConverter(
          createConverter<Profile>()
        );
        const unsubscribe = onSnapshot(profileDocRef, (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            dispatch(setProfileLoading(true));
            dispatch(updateProfile(data));
            dispatch(setProfileLoading(false));
          }
        });
        profileSubscribeRef.current = unsubscribe;

        //get products, but don't subscribe since product info doesn't change often
        const productsCollectionRef = collection(
          db,
          tables.products
        ).withConverter(createConverter<Omit<Product, "id">>());

        const querySnapshot = await getDocs(productsCollectionRef);
        const products: Product[] = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });

        dispatch(updateProducts(products));
      }
    });

    authSubscribeRef.current = unsubscribeAuth;
    setLoading(false);

    return () => {
      profileSubscribeRef.current && profileSubscribeRef.current();
      authSubscribeRef.current && authSubscribeRef.current();
    };
  }, []);

  return { isAppLoading: loading };
}
