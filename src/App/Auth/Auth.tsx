import { signInWithPopup, FacebookAuthProvider, getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { routes } from "constants/routes";
import { useGetter } from "store/accessors";
import Icon, { iconTypes } from "components/Icon";

export default function Auth() {
  const user = useGetter((state) => state.auth.user);
  async function signIn() {
    try {
      const provider = new FacebookAuthProvider();
      const auth = getAuth();
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
      <div className="grid container-padded content-start">
        <p className="text-slate-500 font-bold uppercase my-2">Connect with</p>
        <button
          className="flex items-center gap-2 text-slate-600 bg-slate-100 shadow-outer-slate50 p-3 rounded-md active:shadow-inner-slate50"
          onClick={signIn}
        >
          <Icon type={iconTypes.fb} size={20} />
          <span>Facebook</span>
        </button>
      </div>
    );
  }
}
