import { useFormContext } from "react-hook-form";
import { ConfirmValues } from "./confirmSchema";

export default function ContentOption(props: {
  id: ConfirmValues["contentType"];
  optionName: string;
}) {
  const { watch, register } = useFormContext<ConfirmValues>();
  const contentType = watch("contentType");
  const isOptionActive = contentType === props.id;

  return (
    <div className="relative flex">
      <label
        className={`w-full text-center p-3 rounded-sm uppercase text-slate-600 ${
          isOptionActive
            ? "bg-cyan-100/20 shadow-inner-slate50"
            : "active:bg-cyan-50 cursor-pointer"
        }`}
        htmlFor={`__${props.id}`}
      >
        {props.optionName}
      </label>
      <input
        {...register("contentType")}
        id={`__${props.id}`}
        type="radio"
        className="appearance-none w-0 h-0 absolute"
        value={props.id}
      />
    </div>
  );
}
