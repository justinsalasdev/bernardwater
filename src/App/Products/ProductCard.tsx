import Icon, { iconTypes } from "components/Icon";
import { useSetModal } from "components/Modal/Modal";
import Php from "components/Php";
import Popup, { PopupProps } from "components/Popup/Popup";
import TweakOrder from "components/Popup/TweakOrder";
import UpdateProfileNotice from "components/Popup/UpdateProfileNotice";
import { routes } from "constants/routes";
import { Link } from "react-router-dom";
import { useGetter } from "store/accessors";
import { Product } from "types/types";

export default function ProductCard(props: Product) {
  const { profile } = useGetter((state) => state.profile);
  const { setModalContent } = useSetModal();

  function handleBuy() {
    //if no profile in db
    if (!profile) {
      setModalContent<PopupProps>(Popup, {
        accent: "bg-rose-500",
        Content: UpdateProfileNotice,
        contentProps: {},
      });
      return;
    } else {
      setModalContent<PopupProps<Product>>(Popup, {
        accent: "bg-cyan-600",
        Content: TweakOrder,
        contentProps: props,
      });
    }
  }

  return (
    <div className="grid pt-4 w-48 shadow-outer-slate50 rounded-md overflow-hidden bg-slate-100">
      <div className="flex justify-between px-4">
        <span className="text-slate-600">
          <Php /> {props.price.toFixed(2)}
        </span>
        <p className="flex items-center text-slate-700">
          <span className="uppercase text-xs">
            <Icon
              type={iconTypes.waterDrop}
              size={18}
              className="text-cyan-600"
            />
          </span>
          <span>{(props.volume / 1000).toFixed(2)} L</span>
        </p>
      </div>

      <img src={props.image} className="w-full h-52 object-contain" alt="" />

      <Link
        to={`/${routes.confirm}/${props.id}`}
        state={props}
        className="bg-slate-100 text-cyan-700 uppercase text-xs font-extrabold 
        text-center cursor-pointer shadow-outer-slate50 p-2 m-1 rounded-sm active:shadow-inner-slate50"
      >
        buy
      </Link>
    </div>
  );
}
