import React from "react";
import { Link } from "react-router-dom";

const Ad5PopulerSales = () => {
  return (
    <>
      <section className="PopulerSales">
        <div className="container">
          <div className="d-flex justify-content-between mt-5">
            <h1>Popular Sales</h1>
            <Link className="viewMore">View More</Link>
          </div>
          <div className="row gamerWorled">
            <div className="col-lg-3 col-md-6  col-sm-6 imgin">
              <img src={require("./imges/product-img-5.jpg")} alt="pro5" />
              <div>
                <Link to="/">
                  Xoggle aute et pariatur adipisicing nostrud et excepteur
                </Link>
                <span className="priOne">$24.55 </span>
                <span className="priTwo">$17.79</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 imgin">
              <img src={require("./imges/product-img-6.jpg")} alt="pro6" />
              <div>
                <Link to="/">
                  Xoggle aute et pariatur adipisicing nostrud et excepteur
                </Link>
                <span className="priOne">$24.55 </span>
                <span className="priTwo">$17.79</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 imgin ">
              <img src={require("./imges/product-img-7.jpg")} alt="pro7" />
              <div>
                <Link to="/">
                  Xoggle aute et pariatur adipisicing nostrud et excepteur
                </Link>
                <span className="priOne">$24.55 </span>
                <span className="priTwo">$17.79</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 imgin">
              <img src={require("./imges/product-img-6.jpg")} alt="pro6" />
              <div>
                <Link to="/">
                  Xoggle aute et pariatur adipisicing nostrud et excepteur
                </Link>
                <span className="priOne">$24.55 </span>
                <span className="priTwo">$17.79</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ad5PopulerSales;
