import { useParams } from "react-router-dom";
import { useGetter } from "store/accessors";
import ContentOption from "./ContentOption";
import QuantitySetter from "./QuantitySetter";

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
        <Label text="Quantity" classes="mb-1" />
        <QuantitySetter />
        <Label text="Content" classes="mb-1 mt-4" />
        <div className="grid grid-cols-2 bg-slate-100 shadow-outer-slate50 rounded-md p-0.5">
          <ContentOption optionName="mineral" id="mineral" />
          <ContentOption optionName="distilled" id="distilled" />
        </div>
      </div>
    </div>
  );
}

function Label(props: { text: string; classes?: string }) {
  return (
    <p className={`text-xs uppercase ${props.classes || ""}`}>{props.text}</p>
  );
}
