import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { Profile } from "types/types";

export default function TextInput(props: {
  id: keyof Profile;
  title: string;
  placeholder: string;
  isEditing: boolean;
}) {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<Profile>();

  return (
    <div className="mb-4">
      <label
        className="uppercase text-xs font-bold text-slate-500"
        htmlFor={`__${props.id}`}
      >
        {props.title}
      </label>
      <input
        id={`__${props.id}`}
        {...register(props.id)}
        disabled={isSubmitting}
        readOnly={!props.isEditing}
        placeholder={props.placeholder}
        type="text"
        className="mt-1 w-full text-slate-800 bg-slate-100 shadow-inner-slate50 p-3 rounded-md
        focus:outline-none
        read-only:shadow-none"
      />
      <ErrorMessage
        as="p"
        errors={errors}
        name={props.id}
        className="text-rose-300 font-bold text-xs font-mono text-right mt-1 pr-1"
      />
    </div>
  );
}
