/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, Fragment } from "react";
import Datastat from "./Datastate";

class NewArrivals extends Component {
  render() {
    const Mapstate = Datastat.map((cardo) => {
      return (
        <div key={cardo.id} className="col-lg-3 col-md-4 imgin ">
          <img src={cardo.imgo} alt="cardImg" />
          <div>
            <a href="#">{cardo.info}</a>
            <span className="priOne">{cardo.Beforeo}</span>{" "}
            <span className="priTwo">{cardo.finalPrice}</span>
          </div>
          <button className="flowbut">Add To Cart</button>
          <div className="likeshover">
            <a href="">
              <i className="fa-solid fa-arrows-rotate"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-heart"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-lock"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="d-flex justify-content-between mt-5">
              <h1>New Arrivals</h1>
              <a className="viewMore">View More</a>
            </div>
            <div className="row gamerWorled">{Mapstate}</div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default NewArrivals;
