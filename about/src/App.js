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
      <div className="introtomainpage">
        <NavBar />
        <div className="intro p-3 pt-5 pb-5 ">
          <div className="section m-3 text-center  d-flex align-items-center justify-content-around">
            <div className="first-column p-5 m-3">
              <h1 className="title tealcolor">
                O privire mai atentă asupra proiectului Ascend Aqua...
              </h1>
              <div className="description p">
                Scopul nostru este de a înștiința utilizatorii în legătură cu
                situația actuală a vieții acvatice și influența negativă a
                omului asupra aceasta.
                <br />
                Aici vei găsi o mulțime de secțiuni utile cum ar fi: Articole,
                Jocuri (secțiune destinată copiilor) și Chat.
              </div>
            </div>
            <div className="second-column p-2 m-3 text-white">
              <div className="logo-container mb-5">
                <img
                  src="https://imj31us4am50.github.io/ascendaquamedia/ascendaqualogo.png"
                  alt="logo"
                  className="descriptionlogo"
                />
              </div>
              <div className="description h5">
                Una dintre cele mai populare platforme care promovează
                îmbunătățirea stării și protejarea mediului acvatic într-un mod
                inedit și eficient, prin multitudinea de feature-uri disponibile
                și informații oferite!
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}
