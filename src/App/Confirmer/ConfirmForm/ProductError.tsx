import Icon, { iconTypes } from "components/Icon";
import { routes } from "constants/routes";
import { Link } from "react-router-dom";

export default function ProductError() {
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
}
