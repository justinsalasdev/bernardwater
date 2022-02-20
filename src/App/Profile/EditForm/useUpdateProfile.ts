import { useFormContext } from "react-hook-form";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { tables } from "constants/tables";
import { useGetter } from "store/accessors";
import { Profile, profileConverter } from "../schema";
import { useState } from "react";

export default function useUpdateProfile() {
  const user = useGetter((state) => state.auth.user);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<Profile>();

  const [isEditing, setEditing] = useState(false);
  async function startEdit() {
    //delay 10s so click won't trigger submit on change of button type
    await new Promise((r) => setTimeout(r, 100));
    setEditing(true);
  }

  async function updateProfile(data: Profile) {
    try {
      const db = getFirestore();
      const ref = doc(db, tables.users, user?.uid!).withConverter(
        profileConverter
      );
      await setDoc(ref, data, { merge: true });
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  }
  return {
    updateProfile: handleSubmit(updateProfile),
    startEdit,
    isEditing,
    isSubmitting,
  };
}
