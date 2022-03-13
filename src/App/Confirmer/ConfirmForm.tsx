import { Link, useParams } from "react-router-dom";
import { useGetter } from "store/accessors";
import Icon, { iconTypes } from "components/Icon";
import { routes } from "constants/routes";
import ContentOption from "./ContentOption";
import QuantitySetter from "./QuantitySetter";
import { Product } from "types/types";
import { useFormContext } from "react-hook-form";
import { ConfirmValues } from "./confirmSchema";
import Php from "components/Php";

export default function ConfirmForm() {
  const { id } = useParams<{ id: string }>();
  const products = useGetter((state) => state.products);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="grid container-padded place-items-center content-center">
        <p className="flex items-center gap-1 text-rose-400">
          <Icon type={iconTypes.error} />
          <span className="pb-0.5">product not found!</span>
        </p>
        <Link
          to={`/${routes.products}`}
          className="active:text-cyan-500 text-xs font-bold uppercase"
        >
          <span className="text-sm pb-0.5 text-cyan-600 active:text-cyan-400">
            go to products
          </span>
        </Link>
      </div>
    );
    //add redirect to products page
  } else {
    return (
      <div className="grid container-padded content-start pt-4">
        <Link
          to={`/${routes.products}`}
          className="flex items-center active:text-cyan-500 mb-2"
        >
          <Icon type={iconTypes.arrowBack} />
          <span className="text-sm pb-0.5">select other container</span>
        </Link>

        <img
          src={product?.image}
          alt=""
          className="w-48 h-48 object-contain justify-self-center"
        />

        <Label text="Quantity" classes="mb-1" />
        <QuantitySetter />

        <Label text="Order type" classes="mb-1 mt-4" />
        <div className="grid grid-cols-2 bg-slate-100 shadow-outer-slate50 rounded-md p-0.5">
          <ContentOption optionName="refill" id="refill">
            <Icon type={iconTypes.waterRefill} size={20} />
          </ContentOption>
          <ContentOption optionName="new" id="new">
            <Icon type={iconTypes.waterContainer} size={20} />
          </ContentOption>
        </div>

        <Label text="Summary" classes="mb-1 mt-4" />
        <Summary product={product} />
      </div>
    );
  }
}

function Summary(props: { product: Product }) {
  const { watch, getFieldState } = useFormContext<ConfirmValues>();
  const orderType = watch("orderType");
  const quantity = +watch("quantity");
  const { invalid: isQuantityInvalid } = getFieldState("quantity");

  const refillPrice = props.product.price * (isQuantityInvalid ? 0 : quantity);
  const containerPrice =
    props.product.containerPrice * (isQuantityInvalid ? 0 : quantity);

  return (
    <div>
      <div className="flex gap-1 items-baseline">
        <p className="uppercase text-xs">total</p>
        <p className="text-cyan-700">
          <Php /> {refillPrice}
        </p>
        {orderType === "new" && !isQuantityInvalid && (
          <p className="text-emerald-600 flex gap-1 items-baseline">
            + <Php /> {containerPrice}
            <span className="font-mono text-[12px]">
              ({quantity} new container
              {quantity > 1 ? "s" : ""})
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

function Label(props: { text: string; classes?: string }) {
  return (
    <p className={`text-xs uppercase ${props.classes || ""}`}>{props.text}</p>
  );
}
