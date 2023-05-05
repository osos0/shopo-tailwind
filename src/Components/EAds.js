import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faRotate,
  faShoppingCart,
  faTrophy,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

const EAds = () => {
  return (
    <>
      <div className="back">
        <section>
          <div className="container">
            <div className="row picsCon">
              <div className="col-md-8 col-sm-12 picsConleft">
                <img src={require("./imges/banner-1.2.png")} alt="Bigpanner" />
              </div>
              <div className="col-md-4 col-sm-12 picsConRigth">
                <img src={require("./imges/banner-2.png")} alt="Bigpanner2" />
                <img src={require("./imges/banner-3.png")} alt="Bigpanner3" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container fourCon">
            <div className="row ">
              <div className="col-md-3  col-sm-6 d-flex">
                <div className="icoCon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 d-flex ">
                <div className="icoCon">
                  <FontAwesomeIcon icon={faRotate} />
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 d-flex">
                <div className="icoCon">
                  <FontAwesomeIcon icon={faUserLock} />
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 d-flex">
                <div className="icoCon">
                  <FontAwesomeIcon icon={faTrophy} />
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="d-flex justify-content-between mt-5">
              <h1>Gamer World</h1>
              <Link className="viewMore" to="/">
                View More
              </Link>
            </div>
            <div className="row gamerWorled">
              <div className="col-lg-3 col-sm-6 imgin">
                <div className="imgCon">
                  <img src={require("./imges/product-img-1.jpg")} alt="img1" />
                </div>
                <div className="linkCon">
                  <Link to="/">
                    <p>
                      Xoggle aute et pariatur adipisicing nostrud et excepteur
                    </p>
                  </Link>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 imgin">
                <div className="imgCon">
                  <img src={require("./imges/product-img-2.jpg")} alt="img2" />
                </div>
                <div className="linkCon">
                  <Link to="/">
                    <p>
                      Xoggle aute et pariatur adipisicing nostrud et excepteur
                    </p>
                  </Link>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
              <div className="col-lg-3  col-sm-6 imgin ">
                <div className="imgCon">
                  <img src={require("./imges/product-img-3.jpg")} alt="img3" />
                </div>
                <div className="linkCon">
                  <Link to="/">
                    <p>
                      Xoggle aute et pariatur adipisicing nostrud et excepteur
                    </p>
                  </Link>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 imgin">
                <div className="imgCon">
                  <img src={require("./imges/product-img-5.jpg")} alt="img5" />
                </div>
                <div className="linkCon">
                  <Link to="/">
                    <p>
                      Xoggle aute et pariatur adipisicing nostrud et excepteur
                    </p>
                  </Link>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EAds;
