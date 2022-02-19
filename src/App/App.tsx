import Auth from "./Auth/Auth";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function App() {
  return (
    <div className="font-bold text-green-400 h-ful grid grid-rows-a1a">
      <Header />
      <Auth />
      <Footer />
    </div>
  );
}
