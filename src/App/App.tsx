import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../constants/routes";
import Auth from "./Auth/Auth";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="font-bold text-green-400 h-ful grid grid-rows-a1a">
      <Header />
      <Routes>
        <Route index element={<div>dashboard hello world</div>} />
        <Route path={routes.auth} element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}
