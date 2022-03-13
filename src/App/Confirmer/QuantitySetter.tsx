import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Icon, { iconTypes } from "components/Icon";
import { ConfirmValues } from "./confirmSchema";

export default function QuantitySetter() {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext<ConfirmValues>();

  const quantity = watch("quantity");

  function increment() {
    setValue("quantity", `${+quantity + 1}`, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  function decrement() {
    setValue("quantity", `${+quantity - 1}`, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  return (
    <>
      <div className="grid grid-cols-a1a  gap-1">
        <Indcrementor onClick={decrement}>
          <Icon type={iconTypes.minus} />
        </Indcrementor>
        <input
          {...register("quantity")}
          className="focus:outline-none text-xl font-bold text-center text-slate-700 bg-slate-50 rounded-md shadow-inner-slate50 p-3 w-full"
          type="text"
        />
        <Indcrementor onClick={increment}>
          <Icon type={iconTypes.plus} />
        </Indcrementor>
      </div>
      <ErrorMessage
        errors={errors}
        name="quantity"
        as="p"
        className="font-mono text-xs font-semibold text-rose-400 text-right m-1"
      />
    </>
  );
}

function Indcrementor(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...restProps } = props;
  return (
    <button
      {...restProps}
      className="font-extrabold text-slate-600 bg-slate-200 disabled:text-rose-400 w-10 grid place-items-center 
      shadow-outer-slate50 rounded-md active:shadow-inner-slate50 active:bg-slate-100"
    >
      {children}
    </button>
  );
}
