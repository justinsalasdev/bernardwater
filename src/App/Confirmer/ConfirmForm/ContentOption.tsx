import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { ConfirmValues } from "./confirmSchema";

export default function ContentOption(props: {
  id: ConfirmValues["orderType"];
  optionName: string;
  children?: ReactNode;
}) {
  const { watch, register } = useFormContext<ConfirmValues>();
  const orderType = watch("orderType");
  const isOptionActive = orderType === props.id;

  return (
    <div className="relative flex">
      <label
        className={`flex justify-center items-center gap-2 w-full text-center p-3 rounded-sm uppercase text-slate-600 ${
          isOptionActive
            ? "bg-cyan-100/20 shadow-inner-slate50"
            : "active:bg-cyan-50 cursor-pointer"
        }`}
        htmlFor={`__${props.id}`}
      >
        {props.children}
        <span>{props.optionName}</span>
      </label>
      <input
        {...register("orderType")}
        id={`__${props.id}`}
        type="radio"
        className="appearance-none w-0 h-0 absolute"
        value={props.id}
      />
    </div>
  );
}
