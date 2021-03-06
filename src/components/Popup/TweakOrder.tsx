import Icon, { iconTypes } from "components/Icon";
import Php from "components/Php";
import { Link } from "react-router-dom";
import { Product } from "types/types";

export default function TweakOrder(props: Product) {
  return (
    <div className="grid">
      <div className="grid grid-cols-a1 grid-rows-a1 items-start content-start p-2">
        <img
          src={props.image}
          alt=""
          className="w-36 object-contain row-span-4 mr-2 
          rounded-md shadow-outer-slate50 bg-slate-100"
        />
        <p className="">
          <Php /> 15.00
        </p>
        <p className="flex items-center -ml-1">
          <span className="uppercase text-xs">
            <Icon
              type={iconTypes.waterDrop}
              size={18}
              className="text-cyan-600"
            />
          </span>
          <span>{(props.volume / 1000).toFixed(2)} L</span>
        </p>
        <div className="grid grid-cols-2 justify-items-center p-1 rounded-md shadow-outer-slate50 mb-1 bg-slate-100">
          <p className="uppercase text-xs font-bold tracking-wide p-1">
            mineral
          </p>
          <p className="uppercase text-xs font-bold tracking-wide p-1">
            distilled
          </p>
        </div>
        <div className="grid grid-cols-a1a items-stretch p-1 rounded-md shadow-outer-slate50 bg-slate-100">
          <Indcrementor>
            <Icon type={iconTypes.plus} size={15} />
          </Indcrementor>
          <input
            type="text"
            className="w-full bg-slate-100 shadow-inner-slate50 rounded-md 
            focus:outline-none py-2 text-center text-slate-700"
          />
          <Indcrementor>
            <Icon type={iconTypes.minus} size={15} />
          </Indcrementor>
        </div>
      </div>

      <Link
        to=""
        className="p-3 bg-slate-100 shadow-outer-slate50 rounded-md m-2 
        active:shadow-inner-slate50 text-center uppercase font-extrabold text-slate-700"
      >
        send order
      </Link>
    </div>
  );
}

function Indcrementor(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="text-slate-600 grid place-items-center px-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
