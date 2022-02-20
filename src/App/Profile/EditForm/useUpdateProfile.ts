import { useFormContext } from "react-hook-form";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { tables } from "constants/tables";
import { useGetter } from "store/accessors";
import { Profile, profileConverter } from "../schema";

export default function useUpdateProfile() {
  const user = useGetter((state) => state.auth.user);
  const { handleSubmit } = useFormContext<Profile>();
  async function updateProfile(data: Profile) {
    const db = getFirestore();
    const ref = doc(db, tables.users, user?.uid!).withConverter(
      profileConverter
    );
    await setDoc(ref, data, { merge: true });

    console.log("save data");
  }
  return { updateProfile: handleSubmit(updateProfile) };
}
