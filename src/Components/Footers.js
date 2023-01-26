/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Component, Fragment } from "react";

class Discount extends Component {
  render() {
    return (
      <Fragment>
        <section className="foot1">
          <div className="row disCon">
            <div className="disinsidecon">
              <h1>
                Get <span>20%</span> Off Discount Coupon
              </h1>
              <p>by Subscribe our Newsletter</p>
              <form className="Eform">
                <input placeholder="EMAIL ADDRESS"></input>
                <button type="">Get The Coupon</button>
              </form>
            </div>
          </div>
        </section>
        <section className="foot2">
          <img src={require("../Components/imges/logo.jpg")} />{" "}
        </section>
        <section className="foot3">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h3>About Us</h3>
                <p>
                  We know there are a lot of threa developers our but we pride
                  into a firm in the industry.
                </p>
              </div>
              <div className="col-lg-3">
                <h3>Feature</h3>
                <a href="#">About Us</a>
                <a href="#">Terms Condition</a>
                <a href="#">Best Products</a>
              </div>
              <div className="col-lg-3">
                <h3>General Links</h3>
                <a href="">Blog</a>
                <a href="">Tracking Order</a>
                <a href="">Become Seller</a>
              </div>
              <div className="col-lg-2">
                <h3>Helpful</h3>
                <a href="">Flash Sale</a>
                <a href="">FAQ</a>
                <a href="">Support</a>
              </div>
            </div>
          </div>
        </section>
        <section className="foot4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center">
                <p>
                  ©2022 <b> Quomodosoft </b> All rights reserved
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <img src={require("../Components/imges/payment-getways.png")} />{" "}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Discount;
