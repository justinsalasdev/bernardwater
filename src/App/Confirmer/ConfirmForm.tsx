import Icon, { iconTypes } from "components/Icon";
import React, { useState, useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetter } from "store/accessors";
import * as Yup from "yup";
import { ConfirmValues } from "./confirmSchema";

export default function ConfirmForm() {
  const { id } = useParams<{ id: string }>();
  const products = useGetter((state) => state.products);
  const product = products.find((product) => product.id === id);

  return (
    <div className="grid container-padded content-start pt-4">
      <img
        src={product?.image}
        alt=""
        className="w-48 h-48 object-contain justify-self-center"
      />

      <div className="grid content-start">
        <p className="text-xs uppercase mb-2">quantity</p>
        <QuantitySetter />
        <p>content</p>
        <div></div>
      </div>
    </div>
  );
}

function QuantitySetter() {
  const { control, setValue } = useFormContext<ConfirmValues>();
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid },
  } = useController<ConfirmValues>({ name: "quantity", control });

  function increment() {
    setValue("quantity", `${+value + 1}`);
  }

  function decrement() {
    setValue("quantity", `${+value - 1}`);
  }

  return (
    <div className="grid grid-cols-a1a  gap-1">
      <Indcrementor onClick={decrement} disabled={invalid || +value - 1 <= 0}>
        <Icon type={iconTypes.minus} />
      </Indcrementor>
      <input
        className="focus:outline-none text-xl font-bold text-center text-slate-700 bg-slate-50 rounded-md shadow-inner-slate50 p-3 w-full"
        type="text"
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        ref={ref}
      />
      <Indcrementor onClick={increment} disabled={invalid}>
        <Icon type={iconTypes.plus} />
      </Indcrementor>
    </div>
  );
}

function Indcrementor(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={props.disabled}
      className="font-extrabold text-slate-600 bg-slate-200 disabled:text-rose-400 w-10 grid place-items-center 
      shadow-outer-slate50 rounded-md active:shadow-inner-slate50 active:bg-slate-100"
    >
      {props.children}
    </button>
  );
}

function ContentOption() {}
