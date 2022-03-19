import { useFormContext } from "react-hook-form";
import Php from "components/Php";
import { Product } from "types/types";
import { ConfirmValues } from "./confirmSchema";

export default function Summary(props: { product: Product }) {
  const { watch, getFieldState } = useFormContext<ConfirmValues>();
  const orderType = watch("orderType");
  const quantity = +watch("quantity");
  const { invalid: isQuantityInvalid } = getFieldState("quantity");

  const refillPrice = props.product.price * (isQuantityInvalid ? 0 : quantity);
  const containerPrice =
    props.product.containerPrice * (isQuantityInvalid ? 0 : quantity);

  const isWithGrandTotal = orderType === "new" && !isQuantityInvalid;

  return (
    <div>
      <div className="flex justify-between gap-1 items-baseline">
        <p className="uppercase text-xs text-slate-600">refill</p>
        <p className="text-cyan-700">
          <Php /> {refillPrice.toFixed(2)}
        </p>
      </div>
      {isWithGrandTotal && (
        <div className="flex justify-between gap-1 items-baseline">
          <p className="uppercase text-xs text-slate-600">container</p>
          <p className="text-emerald-600 flex gap-1 items-baseline">
            <span className="font-mono text-[12px]">
              ({quantity} new container
              {quantity > 1 ? "s" : ""})
            </span>
            + <Php /> {containerPrice.toFixed(2)}
          </p>
        </div>
      )}
      {isWithGrandTotal && (
        <div className="flex justify-between gap-1 items-baseline border-t-2 border-cyan-700/30 mt-2">
          <p className="uppercase font-bold text-sm text-slate-600">total</p>
          <p className="text-cyan-700">
            <Php /> {(refillPrice + containerPrice).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
