import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { updateUser } from "services/auth/auth";
import { useSetter } from "store/accessors";
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
      const { photoURL, displayName } = currentUser;
      dispatch(updateUser({ photoURL, displayName }));
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(updateUser(null));
      } else {
        dispatch(
          updateUser({ displayName: user.displayName, photoURL: user.photoURL })
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
