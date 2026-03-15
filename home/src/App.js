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
        <div className="intro p-5 mt-5">
          <div className="section p-3 text-center text-white">
            <h1>
              Bine ai venit, <span className="text-danger">PHP</span>!
            </h1>
            <h5>
              Aruncă o privire la tot ce am pregătit pentru tine astăzi...
            </h5>
          </div>
        </div>
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}
