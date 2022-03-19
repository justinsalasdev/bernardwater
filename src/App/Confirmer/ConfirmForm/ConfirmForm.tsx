import { Link, useParams } from "react-router-dom";
import { useGetter } from "store/accessors";
import Icon, { iconTypes } from "components/Icon";
import { routes } from "constants/routes";
import QuantitySetter from "../QuantitySetter";
import ContentOption from "./ContentOption";
import Summary from "./Summary";
import ProductError from "./ProductError";

export default function ConfirmForm() {
  const { id } = useParams<{ id: string }>();
  const products = useGetter((state) => state.products);
  const product = products.find((product) => product.id === id);

  if (!product) return <ProductError />;
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

function Label(props: { text: string; classes?: string }) {
  return (
    <p className={`text-xs uppercase ${props.classes || ""}`}>{props.text}</p>
  );
}
