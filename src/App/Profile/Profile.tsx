import React, { useState } from "react";
import TextInput from "./TextInput";

export default function Profile() {
  const [isEditing, setEditing] = useState(false);

  async function startEdit() {
    //delay 10s so click won't trigger submit on change of button type
    await new Promise((r) => setTimeout(r, 100));
    setEditing(true);
  }

  return (
    <form
      className="justify-self-center self-start mt-8 w-full max-w-md rounded-md grid"
      onSubmit={(e: any) => {
        e.preventDefault();
        console.log("hello world");
      }}
    >
      {(isEditing && <ProfileAction type="submit">save</ProfileAction>) || (
        <ProfileAction type="button" onClick={startEdit}>
          edit profile
        </ProfileAction>
      )}
      <TextInput
        title="Full name"
        placeholder="Juan Dela Cruz"
        isEditing={isEditing}
      />
      <TextInput
        title="Mobile number"
        placeholder="09982223429"
        isEditing={isEditing}
      />
      <TextInput
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
      className="bg-cyan-600 justify-self-end px-4 py-1 rounded-full 
        uppercase text-xs text-slate-50 tracking-wide font-bold hover:bg-cyan-500 active:text-slate-300"
    >
      {children}
    </button>
  );
}
