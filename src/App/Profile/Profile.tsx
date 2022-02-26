import { Profile as _Profile } from "types/types";
import { useGetter } from "store/accessors";
import ProfileEditor from "./ProfileEditor";
import EditForm from "./EditForm/EditForm";
import Loader from "components/Loader";

export default function Profile() {
  const {
    auth: { user },
    profile: { profile, isProfileLoading },
  } = useGetter((state) => state);

  const initialProfileData: Partial<_Profile> = {
    fullName: profile?.fullName || user?.displayName || "",
    mobileNumber: profile?.mobileNumber || user?.phoneNumber || "",
    address: profile?.address || "",
  };

  const profileContent = isProfileLoading ? (
    <Loader classes="text-cyan-400 justify-self-center self-start mt-8" />
  ) : (
    <ProfileEditor {...initialProfileData}>
      <EditForm />
    </ProfileEditor>
  );

  return (
    <div className="bg-slate-50 container-padded grid content-start justify-items-center pt-8">
      {profileContent}
    </div>
  );
}
