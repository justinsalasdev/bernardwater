import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { Profile } from "../schema";

export default function TextInput(props: {
  id: keyof Profile;
  title: string;
  placeholder: string;
  isEditing: boolean;
}) {
  const {
    register,
    formState: { errors },
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
        readOnly={!props.isEditing}
        placeholder={props.placeholder}
        type="text"
        className="mt-1 w-full bg-slate-50/30 border text-slate-700 shadow-inner p-4 rounded-md
         focus:outline-none focus:ring-2 focus:ring-cyan-700/20
         placeholder:text-slate-300 read-only:pointer-events-none read-only:shadow-none
         read-only:border-t-transparent read-only:border-x-transparent 
         read-only:rounded-none read-only:placeholder:invisible"
      />
      <ErrorMessage
        as="p"
        errors={errors}
        name={props.id}
        className="text-rose-300 text-xs font-mono text-right mt-1 pr-1"
      />
    </div>
  );
}
