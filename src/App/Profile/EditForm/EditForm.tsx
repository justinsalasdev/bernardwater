import Loader from "components/Loader";
import TextInput from "./TextInput";
import useUpdateProfile from "./useUpdateProfile";

export default function EditForm() {
  const {
    updateProfile,
    isEditing,
    isSubmitDisabled,
    isSubmitting,
    startEdit,
  } = useUpdateProfile();

  return (
    <form className="w-full max-w-md rounded-md grid" onSubmit={updateProfile}>
      {(isEditing && (
        <ProfileAction type="submit" disabled={isSubmitDisabled}>
          {(isSubmitting && <Loader classes="pb-0" text="..saving" />) ||
            "save"}
        </ProfileAction>
      )) || (
        <ProfileAction type="button" onClick={startEdit}>
          edit profile
        </ProfileAction>
      )}
      <TextInput
        id="fullName"
        title="Full name"
        placeholder="Juan Dela Cruz"
        isEditing={isEditing}
      />
      <TextInput
        id="mobileNumber"
        title="Mobile number"
        placeholder="09982223429"
        isEditing={isEditing}
      />
      <TextInput
        id="address"
        title="Address"
        placeholder="Lot 261 Block 9 Subdivision, San Rafael, Rizal"
        isEditing={isEditing}
      />
      {/* <TextInput title="Others" placeholder="others" /> */}
    </form>
  );
}

function ProfileAction(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...restProps } = props;
  return (
    <button
      {...restProps}
      className="bg-cyan-600 disabled:bg-slate-400 justify-self-end px-4 py-1 rounded-sm 
        uppercase text-xs text-slate-50 tracking-wide font-bold hover:bg-cyan-500 active:text-slate-300"
    >
      {children}
    </button>
  );
}
