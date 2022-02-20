import { routes } from "constants/routes";
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useGetter } from "store/accessors";

export default function RouteGuard(props: { children: ReactElement }) {
  const user = useGetter((state) => state.auth.user);
  if (user) {
    return props.children;
  } else {
    return <Navigate to={`/${routes.auth}`} />;
  }
}
