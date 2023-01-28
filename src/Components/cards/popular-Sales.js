/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, Fragment } from "react";
import Datastat from "./Datastate";

class PopularSales extends Component {
  render() {
    const Mapstate = Datastat.map((cardo) => {
      return (
        <div key={cardo.id} className="col-lg-6 col-md-12 popCon">
          <img src={cardo.imgo} alt="cardImg" />
          <div>
            <a href="#">{cardo.info}</a>
            <span className="smpri1">{cardo.Beforeo}</span>{" "}
            <span className="smpri2">{cardo.finalPrice}</span>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="d-flex justify-content-between mt-5">
              {/* <h1 onClick={this.handelClicked}>Popular Sales</h1> */}
              <h1>Popular Sales</h1>
              <a className="viewMore">View More</a>
            </div>
            <div className="row">{Mapstate}</div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default PopularSales;
