import Icon, { iconTypes } from "components/Icon";
import { routes } from "constants/routes";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <nav className="flex ml-auto">
      <NavLink to={routes.products} className={genClassName}>
        <Icon type={iconTypes.grid} />
      </NavLink>
      <NavLink to={routes.profile} className={genClassName}>
        <Icon type={iconTypes.user} />
      </NavLink>
    </nav>
  );
}

const genClassName = (props: { isActive: boolean }) =>
  `text-slate-50 hover:text-cyan-200 p-2 rounded-md ${
    props.isActive
      ? "bg-cyan-50 bg-opacity-10 shadow-inner pointer-events-none"
      : ""
  }`;
