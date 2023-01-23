import { React, Component, Fragment } from "react";
import "./App.css";
import Navbars from "./Components/Navbars";
import Ad from "./Components/Ad";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbars />
        <Ad />
      </Fragment>
    );
  }
}

export default App;
