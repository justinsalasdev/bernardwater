import { useFormContext } from "react-hook-form";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { tables } from "constants/tables";
import { useGetter } from "store/accessors";
import { useState } from "react";
import { Profile } from "types/types";
import { profileConverter } from "types/coverters";

export default function useUpdateProfile() {
  const user = useGetter((state) => state.auth.user);
  const {
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty },
  } = useFormContext<Profile>();

  const [isEditing, setEditing] = useState(false);
  async function startEdit() {
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
    isSubmitDisabled: !isValid || !isDirty || isSubmitting,
  };
}
