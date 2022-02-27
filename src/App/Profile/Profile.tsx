import { Profile as _Profile } from "types/types";
import { useGetter } from "store/accessors";
import ProfileEditor from "./ProfileEditor";
import EditForm from "./EditForm/EditForm";
import Loader from "components/Loader";
import Icon, { iconTypes } from "components/Icon";

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
    <div className="container-padded grid content-start pt-8 justify-items-center">
      <div className="justify-self-start flex items-center gap-2 text-xs uppercase text-slate-700">
        <Icon type={iconTypes.motor} size={20} />
        <span>your delivery information</span>
      </div>
      {profileContent}
    </div>
  );
}
