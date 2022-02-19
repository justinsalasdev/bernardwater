import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { routes } from "constants/routes";
import { useGetter } from "store/accessors";
import Icon, { iconTypes } from "components/Icon";

export default function Auth() {
  const user = useGetter((state) => state.auth.user);
  async function signIn() {
    try {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      if (credential === null) {
        alert("failed to get credential");
      } else {
        const accessToken = credential.accessToken;
        console.log(accessToken, user);
      }
    } catch (err) {
      alert("failed");
    }
  }

  if (user) {
    return <Navigate to={routes.index} />;
  } else {
    return (
      <div className="w-full max-w-sm justify-self-center self-start mt-8 grid content-start gap-4">
        <p className="text-slate-500 font-bold uppercase">Connect with</p>
        <button
          className="flex items-center gap-2 bg-cyan-800 shadow-sm 
          shadow-cyan-800 text-slate-50 py-2 px-4 rounded-md 
          transition transform hover:scale-110 active:translate-x-2 
          hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-300/20 font-bold"
          onClick={signIn}
        >
          <Icon type={iconTypes.fb_square} size={20} />
          <span>Facebook</span>
        </button>
      </div>
    );
  }
}
