import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import "./Styles/main.scss";
// import Navbars from "./Components/Navbars";
import Home from "./pages/Home";
import ENavbar from "./Components/ENavbar";
import EFooters from "./Components/EFooters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Shop from "./pages/Shop";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <Fragment>
      <ENavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <EFooters />
    </Fragment>
  );
}

export default App;
