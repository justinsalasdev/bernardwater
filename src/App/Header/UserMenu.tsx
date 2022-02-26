import { routes } from "constants/routes";
import { NavLink } from "react-router-dom";

const links: routes[] = [routes.profile, routes.orders];

export default function UserMenu() {
  return (
    <nav className="flex ml-2">
      {links.map((route) => (
        <NavLink
          to={route}
          key={route}
          className={({ isActive }) =>
            `text-slate-50 uppercase font-semibold text-sm hover:text-cyan-200 p-2 rounded-md ${
              isActive
                ? "bg-cyan-50 bg-opacity-10 shadow-inner pointer-events-none"
                : ""
            }`
          }
        >
          {route}
        </NavLink>
      ))}
    </nav>
  );
}
