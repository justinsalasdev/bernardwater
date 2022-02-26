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
import Loader from "components/Loader";
import Modal from "components/Modal/Modal";

export default function App() {
  const { isAppLoading } = useInitApp();
  if (isAppLoading) {
    return <Loader classes="text-cyan-500 place-self-center" />;
  } else {
    return (
      <div className="grid grid-rows-a1a relative bg-slate-50">
        <Modal classes="fixed top-0 bottom-0 right-0 left-0 bg-slate-800/50 grid place-items-center">
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
        </Modal>
      </div>
    );
  }
}
