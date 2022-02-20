import { useFormContext } from "react-hook-form";
import { Profile } from "./schema";

export default function useUpdateProfile() {
  const { handleSubmit } = useFormContext<Profile>();
  async function updateProfile(data: Profile) {
    console.log(data);
  }
  return { updateProfile: handleSubmit(updateProfile) };
}
