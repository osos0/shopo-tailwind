import React from "react";
import { Link } from "react-router-dom";
const Ad4BestSaller = () => {
  return (
    <>
      <section className="BestSaller">
        <div className="container text-center">
          <div className="row mt-5 mb-5">
            <div className="d-flex justify-content-between mb-5">
              <h1>Best Saller</h1>
              <Link to="/" className="viewMore">
                View More
              </Link>
            </div>
            <div className="col-lg-2 col-sm-6 roundPic">
              <img src={require("./imges/saller-1.png")} alt="imaageo" />
            </div>
            <div className="col-lg-2 col-sm-6 roundPic">
              <img src={require("./imges/saller-2.png")} alt="imaageo" />
            </div>
            <div className="col-lg-2 col-sm-6 roundPic">
              <img src={require("./imges/saller-3.png")} alt="imaageo" />
            </div>
            <div className="col-lg-2 col-sm-6 roundPic">
              <img src={require("./imges/saller-4.png")} alt="imaageo" />
            </div>
            <div className="col-lg-2 col-sm-6 roundPic">
              <img src={require("./imges/saller-5.png")} alt="imaageo" />
            </div>
            <div className="col-lg-2 col-sm-6 roundPic">
              <img src={require("./imges/saller-6.png")} alt="imaageo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ad4BestSaller;
