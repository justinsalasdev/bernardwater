import Icon, { iconTypes } from "components/Icon";
import { routes } from "constants/routes";
import { Link } from "react-router-dom";

export default function UpdateProfileNotice() {
  return (
    <div className="grid content-center place-items-center gap-2">
      <Icon type={iconTypes.error} size={30} className="text-rose-300" />
      <p className="text-center text-slate-700">
        Kindly complete your delivery information and try again.
      </p>
      <Link
        to={`/${routes.profile}`}
        className="text-cyan-600 uppercase font-bold text-xs mt-2 flex items-center gap-2
        transform active:translate-x-1"
      >
        <span>update now</span>
        <Icon type={iconTypes.arrowRight} size={17} />
      </Link>
    </div>
  );
}
