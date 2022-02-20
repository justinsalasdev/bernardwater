import { useEffect, useState } from "react";
import { Profile as _Profile, profileConverter } from "./schema";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useGetter } from "store/accessors";
import { tables } from "constants/tables";
import ProfileEditor from "./ProfileEditor";
import EditForm from "./EditForm/EditForm";

export default function Profile() {
  const [isGettingUserData, setIsGettingUserData] = useState(true);
  const [userData, setUserData] = useState<_Profile>();
  const user = useGetter((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const docRef = doc(db, tables.users, user?.uid!).withConverter(
        profileConverter
      );

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
      }
      setIsGettingUserData(false);
    })();
  }, []);

  const initialProfileData: Partial<_Profile> = {
    fullName: userData?.fullName || user?.displayName || "",
    mobileNumber: userData?.mobileNumber || user?.phoneNumber || "",
    address: userData?.address || "",
  };

  if (isGettingUserData) {
    return <div>loading</div>;
  } else {
    return (
      <ProfileEditor {...initialProfileData}>
        <EditForm />
      </ProfileEditor>
    );
  }
}
