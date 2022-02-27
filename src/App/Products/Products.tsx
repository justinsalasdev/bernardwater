import { useSetModal } from "components/Modal/Modal";
import Popup, { PopupProps } from "components/Popup/Popup";
import { useGetter } from "store/accessors";

export default function Products() {
  const products = useGetter((state) => state.products);
  console.log(products);
  return (
    <div className="container-padded grid content-start pt-4">
      <div className="grid justify-items-center gap-2">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="p-2 w-48 shadow-outer-slate50 rounded-md bg-slate-100"
            >
              <img src={product.image} className="w-full h-36 object-contain" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
