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
          edit
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
      className="justify-self-end text-xs uppercase p-2 font-bold text-slate-600 bg-slate-100 
      shadow-outer-slate50 rounded-md active:shadow-inner-slate50 cursor-pointer 
      disabled:text-slate-300"
    >
      {children}
    </button>
  );
}
