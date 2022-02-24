import { useState } from "react";
import img from "../../assets/water-rounded.png";

export default function Dashboard() {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  let decrementQuantity = () => setQuantity(quantity - 1);

  if (quantity <= 0) {
    decrementQuantity = () => setQuantity(1);
  }

  // const onChangeHandler = (e) => {
  //   setQuantity(e.target.value);
  // };

  const price = 30;
  return (
    <div className="bg-slate-50 grid content-start">
      <div
        className="grid mt-4 place-self-center grid-cols-a1 gap-3 p-3 
      shadow-outer-slate50 rounded-lg bg-slate-100"
      >
        <div className="grid justify-items-center p-3 shadow-inner-slate50 rounded-md">
          <img src={img} alt="water" className="h-54 w-48 object-contain" />
          <p className="text-slate-600 uppercase text-lg font-bold">
            price: 30.00
          </p>
        </div>

        <div className="grid grid-rows-a1a gap-10 justify-items-center aspect-square">
          <button
            className="text-2xl font-bold aspect-square w-16 shadow-outer-slate50 bg-slate-150 rounded-full"
            onClick={incrementQuantity}
          >
            +
          </button>
          <input
            className="focus:outline-none text-xl font-bold text-center text-slate-700 bg-slate-50 rounded-md shadow-inner-slate50"
            type="text"
            value={quantity}
          />
          <button
            className="text-2xl font-bold aspect-square w-16 shadow-outer-slate50 rounded-full"
            onClick={incrementQuantity}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
