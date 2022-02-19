import { useGetter } from "store/accessors";
import placeholderAvatar from "assets/icons/placeholderAvatar.jpg";
import { getAuth } from "firebase/auth";
import { useState } from "react";

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
      <img
        className="object-contain w-16 h-16 rounded-full mr-2 border-4 border-cyan-100 object-center shadow-md shadow-cyan-800"
        src={user?.photoURL || placeholderAvatar}
        alt=""
      />
      <p className="text-slate-50 font-semibold">
        {user?.displayName || "User"}
      </p>

      {user && (
        <button
          onClick={handleSignOut}
          disabled={isLoggingOut}
          className="cursor-pointer ml-auto py-2 px-4 0 bg-slate-50 hover:bg-cyan-100 disabled:bg-slate-300 disabled:text-slate-40 uppercase rounded-full text-slate-700 text-sm font-bold"
        >
          logout
        </button>
      )}
    </div>
  );
}
