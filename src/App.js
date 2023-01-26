import { React, Component, Fragment } from "react";
import "./App.css";
import Navbars from "./Components/Navbars";
import Ad from "./Components/Ad";
import NewArrivals from "./Components/cards/cards";
import PopularSales from "./Components/cards/popular-Sales";
import Discount from "./Components/Footers";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbars />
        <Ad />
        <NewArrivals />
        <PopularSales />
        <Discount />
      </Fragment>
    );
  }
}

export default App;
