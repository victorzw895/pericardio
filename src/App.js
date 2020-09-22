import React from "react";
import "./App.css";

import { HashRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";

import MainBanner from "./Components/MainBanner";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Lading-page">
          <MainBanner />
          <NavBar />
          <div className="Content">{Routes}</div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
