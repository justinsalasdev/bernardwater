import { useGetter } from "store/accessors";
import { useState } from "react";
import logo from "assets/icons/logo.svg";
import UserMenu from "./UserMenu";
import { NavLink } from "react-router-dom";
import { routes } from "constants/routes";
import { getAuth } from "firebase/auth";

export default function Header() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const user = useGetter((state) => state.auth.user);

  async function handleSignOut() {
    setIsLoggingOut(true);
    const auth = getAuth();
    await auth.signOut();
    setIsLoggingOut(false);
  }

  return (
    <div className="bg-cyan-900 p-4 flex items-center shadow-lg">
      <NavLink
        to={routes.index}
        className={({ isActive }) =>
          `${
            isActive ? "pointer-events-none ring-4 ring-slate-50/30" : ""
          } w-10 h-10 rounded-full mr-2 transform hover:scale-110 transition active:rotate-45`
        }
      >
        <img
          className="object-contain w-full h-full object-center "
          src={logo}
          alt=""
        />
      </NavLink>

      {user && <UserMenu />}

      {user && (
        <button
          onClick={handleSignOut}
          disabled={isLoggingOut}
          className="cursor-pointer ml-auto uppercase text-sm font-bold text-slate-50 hover:text-cyan-200 disabled:text-slate-500"
        >
          logout
        </button>
      )}
    </div>
  );
}
