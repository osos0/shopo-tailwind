import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./Styles/main.scss";
// import Navbars from "./Components/Navbars";
import Home from "./pages/Home";
import ENavbar from "./Components/ENavbar";
import EFooters from "./Components/EFooters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <Fragment>
      {/* <Navbars /> */}
      <ENavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <EFooters />
    </Fragment>
  );
}

export default App;
