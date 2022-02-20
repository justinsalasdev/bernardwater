import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { updateUser } from "services/auth/auth";
import { useSetter } from "store/accessors";
import { getAuth } from "firebase/auth";
export default function useInitApp() {
  const [loading, setLoading] = useState(true);
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
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
      }
    });
    setLoading(false);
    return () => {
      unsubscribe();
    };
  }, []);

  return { isAppLoading: loading };
}
