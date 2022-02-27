import Icon, { iconTypes } from "components/Icon";
import React, { useState } from "react";
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

        <div className="grid content-center place-items-center gap-4">
          <Indcrementor>
            <Icon type={iconTypes.plus} size={20} />
          </Indcrementor>
          <input
            className="focus:outline-none text-xl font-bold text-center text-slate-700 bg-slate-50 rounded-md shadow-inner-slate50 p-3"
            type="text"
            value={quantity}
          />
          <Indcrementor>
            <Icon type={iconTypes.minus} size={20} />
          </Indcrementor>
        </div>
      </div>
    </div>
  );
}

function Indcrementor(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="font-extrabold text-slate-600 bg-slate-200 w-10 aspect-square grid place-items-center shadow-outer-slate50 rounded-md active:shadow-inner-slate50 active:bg-slate-100"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
