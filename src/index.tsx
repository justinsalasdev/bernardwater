import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./index.css";

initializeApp({
  apiKey: "AIzaSyCqYcqebQhMqIOBWQYVTReLhYwIf9cEvLE",
  authDomain: "bernard-water.firebaseapp.com",
  projectId: "bernard-water",
  storageBucket: "bernard-water.appspot.com",
  messagingSenderId: "664269595028",
  appId: "1:664269595028:web:946e74cd2d4708ecaaef81",
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
