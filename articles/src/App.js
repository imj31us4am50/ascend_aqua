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
      <div className="intropart d-flex align-items-center justify-content-around p-5">
        <div className="first-intropart text-white text-center ">
          <h1 className="title mx-auto">
            Pentru postări sau pur și simplu delectare.
          </h1>
          <div className="subtitle">
            Fie că ești aici să îți împărtășești ideile cu alți utilizatori sau
            să vizionezi restul articolelor, acesta este{" "}
            <span className="tealcolor">locul perfect</span>!
          </div>
        </div>
        <div className="second-intropart text-white text-center ">
          <h1 className="title mx-auto tealcolor">Caută un articol</h1>
          <div className="description">
            Îți vom afișa articolele postate în funcție de căutarea ta...
          </div>
          <div className="container-of-search-bar">
            {" "}
            <input
              type="search"
              className="mx-auto mt-4"
              placeholder="Caută..."
              spellCheck="false"
              maxLength="50"
            />
          </div>
        </div>
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}
