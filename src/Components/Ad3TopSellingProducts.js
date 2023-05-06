import React from "react";

const Ad3TopSellingProducts = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex justify-content-between mt-5">
            <h1>Top Selling Products</h1>
            <a href="/" className="viewMore">
              View More
            </a>
          </div>
          <div className="row TopSe mt-5">
            <div className="col-md-6  LabRightAd">
              <div className="row">
                <div className="col-5 picon">
                  <img src={require("./imges/product-img-4.jpg")} alt="top4" />
                </div>
                <div className="col-7 downAd">
                  <a href="/">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <div>
                    <span className="priOne ">$24.55 </span>
                    <span className="priTwo ">$17.79</span>
                  </div>
                  <button className="btnCard">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 LabRightAd">
              <div className="row">
                <div className="col-5 picon">
                  <img src={require("./imges/product-img-5.jpg")} alt="top5" />
                </div>
                <div className="col-7 downAd">
                  <a href="/">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <div>
                    <span className="priOne ">$24.55 </span>
                    <span className="priTwo ">$17.79</span>
                  </div>
                  <button className="btnCard">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 LabRightAd">
              <div className="row ">
                <div className="col-5 picon">
                  <img src={require("./imges/product-img-6.jpg")} alt="top6" />
                </div>
                <div className="col-7 downAd">
                  <a href="/">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <div>
                    <span className="priOne ">$24.55 </span>
                    <span className="priTwo ">$17.79</span>
                  </div>
                  <button className="btnCard">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 LabRightAd">
              <div className="row">
                <div className="col-5 picon">
                  <img src={require("./imges/product-img-7.jpg")} alt="top6" />
                </div>
                <div className="col-7 downAd">
                  <a href="/">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <div>
                    <span className="priOne ">$24.55 </span>
                    <span className="priTwo ">$17.79</span>
                  </div>
                  <button className="btnCard">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ad3TopSellingProducts;
