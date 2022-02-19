import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { routes } from "constants/routes";
const provider = new FacebookAuthProvider();

export default function Auth() {
  const auth = getAuth();
  async function signIn() {
    try {
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

  if (auth.currentUser) {
    return <Navigate to={routes.index} />;
  } else {
    return (
      <div>
        <button onClick={signIn}>login using faceboook</button>
      </div>
    );
  }
}
