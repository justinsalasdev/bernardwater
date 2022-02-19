import { Route, Routes } from "react-router-dom";
import { routes } from "constants/routes";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Auth from "./Auth/Auth";
import useInitApp from "./useInitApp";

export default function App() {
  const { isAppLoading } = useInitApp();
  if (isAppLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="grid grid-rows-a1a">
        <Header />
        <Routes>
          <Route path={routes.index} element={<Dashboard />} />
          <Route path={routes.auth} element={<Auth />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
