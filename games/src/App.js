import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "/navbar/navbar.js";
import Footer from "/footer/footer.js";
import MainPage from "/mainpage/mainpage.js";

export default function App() {
  return (
    <div className="App container-fluid m-0 p-0">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}
