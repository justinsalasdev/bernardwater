import { Route, Routes } from "react-router-dom";
import { routes } from "constants/routes";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Auth from "./Auth/Auth";
import useInitApp from "./useInitApp";
import Profile from "./Profile/Profile";
import Orders from "./Orders/Orders";
import RouteGuard from "components/RouteGuard";

export default function App() {
  const { isAppLoading } = useInitApp();
  if (isAppLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="grid grid-rows-a1a">
        <Header />
        <Routes>
          <Route index element={<RouteGuard Component={Dashboard} />} />
          <Route path={routes.auth} element={<Auth />} />
          <Route
            path={routes.profile}
            element={<RouteGuard Component={Profile} />}
          />
          <Route
            path={routes.orders}
            element={<RouteGuard Component={Orders} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}
