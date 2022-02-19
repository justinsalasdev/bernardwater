import { routes } from "constants/routes";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useGetter } from "store/accessors";

export default function RouteGuard(props: { Component: FC }) {
  const user = useGetter((state) => state.auth.user);
  if (user) {
    return <props.Component />;
  } else {
    return <Navigate to={`/${routes.auth}`} />;
  }
}
