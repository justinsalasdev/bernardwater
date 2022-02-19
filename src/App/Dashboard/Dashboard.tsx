import { routes } from "constants/routes";
import { Navigate } from "react-router-dom";
import { useGetter } from "store/accessors";

export default function Dashboard() {
  const user = useGetter((state) => state.auth.user);

  if (!user) {
    return <Navigate to={routes.auth} />;
  } else {
    return <div>dashboard</div>;
  }
}
