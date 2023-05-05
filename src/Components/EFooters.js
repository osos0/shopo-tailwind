import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const EFooters = () => {
  return (
    <>
      <div className="FootersContainer">
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
        <section className="text-center m-4">
          <img src={require("../Components/imges/logo.jpg")} alt="logo" />
        </section>
        <section className="foot3">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <h3>About Us</h3>
                <p>
                  We know there are a lot of threa developers our but we pride
                  into a firm in the industry.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3>Feature</h3>
                <Link to="#">About Us</Link>
                <Link to="#">Terms Condition</Link>
                <Link to="#">Best Products</Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3>General Links</h3>
                <Link to="#">Blog</Link>
                <Link to="#">Tracking Order</Link>
                <Link to="#">Become Seller</Link>
              </div>
              <div className="col-lg-2 col-sm-6">
                <h3>Helpful</h3>
                <Link to="#">Flash Sale</Link>
                <Link to="#">FAQ</Link>
                <Link to="3">Support</Link>
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
                <img
                  src={require("../Components/imges/payment-getways.png")}
                  alt="visa"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EFooters;
