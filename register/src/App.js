import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IntroPage from "/intropage/intropage.js";

export default function App() {
  return (
    <div className="App">
      <IntroPage />
    </div>
  );
}
