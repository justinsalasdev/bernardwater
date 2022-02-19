import { useGetter } from "store/accessors";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import logo from "assets/icons/logo.svg";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";

export default function Header() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const user = useGetter((state) => state.auth.user);

  async function handleSignOut() {
    const auth = getAuth();
    setIsLoggingOut(true);
    await auth.signOut();
    setIsLoggingOut(false);
  }

  return (
    <div className="bg-cyan-900 p-4 flex items-center shadow-lg">
      <Link to={routes.index}>
        <img
          className="object-contain w-10 h-10 rounded-full mr-2 object-center shadow-md shadow-cyan-800"
          src={logo}
          alt=""
        />
      </Link>

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
