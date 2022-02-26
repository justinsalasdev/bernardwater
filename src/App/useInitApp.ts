import { initializeApp } from "firebase/app";
import { useEffect, useRef, useState } from "react";
import { updateUser } from "services/auth/auth";
import { useSetter } from "store/accessors";
import { getAuth } from "firebase/auth";
import { setProfileLoading, updateProfile } from "services/profile/profile";
import {
  doc,
  getFirestore,
  onSnapshot,
  Unsubscribe as FireStoreUnsubscribe,
} from "firebase/firestore";
import { tables } from "constants/tables";
import { Profile } from "types/types";
import createConverter from "helpers/createConverter";
export default function useInitApp() {
  const [loading, setLoading] = useState(true);
  const profileSubscribeRef = useRef<FireStoreUnsubscribe>();
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
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
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
        const docRef = doc(db, tables.users, user.uid).withConverter(
          createConverter<Profile>()
        );
        const unsubscribe = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            dispatch(setProfileLoading(true));
            dispatch(updateProfile(data));
            dispatch(setProfileLoading(false));
          }
        });

        profileSubscribeRef.current = unsubscribe;
      }
    });

    //get products, but don't subscribe since product info doesn't change often

    setLoading(false);
    return () => {
      unsubscribeAuth();
      if (profileSubscribeRef.current) {
        profileSubscribeRef.current();
      }
    };
  }, []);

  return { isAppLoading: loading };
}
