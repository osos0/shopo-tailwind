import { Link } from "react-router-dom";

const { Component, Fragment } = require("react");

class Ad extends Component {
  state = {
    days: new Date().getDay(),
    Hours: new Date().getHours(),
    Minutes: new Date().getMinutes(),
    Secondes: new Date().getSeconds(),
  };

  // setTimeout(changeTheNumber, 2000);

  render() {
    return (
      <Fragment>
        {/* <section>
          <div className="container">
            <div className="row picsCon">
              <div className="col-md-8 col-sm-12 picsConleft">
                <a href="#">
                  <img src={require("./imges/banner-1.2.png")} />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 picsConRigth">
                <a href="#">
                  <img src={require("./imges/banner-2.png")} />
                </a>

                <a href="#">
                  <img src={require("./imges/banner-3.png")} />
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section>
          <div className="container fourCon">
            <div className="row ">
              <div className="col-md-3  d-flex">
                <div className="icoCon">
                  <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className="col-md-3  d-flex ">
                <div className="icoCon">
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className="col-md-3  d-flex">
                <div className="icoCon">
                  <i className="fa-solid fa-user-lock"></i>
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className="col-md-3  d-flex">
                <div className="icoCon">
                  <i className="fa-solid fa-trophy"></i>
                </div>

                <div>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section>
          <div className="container">
            <div className="d-flex justify-content-between mt-5">
              <h1>Gamer World</h1>
              <a className="viewMore">View More</a>
            </div>
            <div className="row gamerWorled">
              <div className="col-lg-3 col-md-4 imgin">
                <img src={require("./imges/product-img-1.jpg")} />
                <div>
                  <a href="#">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 imgin">
                <img src={require("./imges/product-img-2.jpg")} />
                <div>
                  <a href="#">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 imgin ">
                <img src={require("./imges/product-img-3.jpg")} />
                <div>
                  <a href="#">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 imgin">
                <img src={require("./imges/product-img-5.jpg")} />
                <div>
                  <a href="">
                    Xoggle aute et pariatur adipisicing nostrud et excepteur
                  </a>
                  <span className="priOne">$24.55 </span>
                  <span className="priTwo">$17.79</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section>
          <div className="container">
            <div className="row BrandCon ">
              <h1 className="mb-5">Shop by Brand</h1>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-1.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-2.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-3.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-4.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-5.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-6.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-7.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-8.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-9.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-10.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-11.png")} alt="imaageo" />
              </div>
              <div className="col-lg-2 col-sm-6">
                <img src={require("./imges/brand-12.png")} alt="imaageo" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 wooAd">
                <div className="row timer">
                  <div className="col-3 timerH">
                    <div>{this.state.days}</div>
                    <p>Days</p>
                  </div>
                  <div className="col-3 timerH">
                    <div>{this.state.Hours}</div>
                    <p>Hours</p>
                  </div>
                  <div className="col-3 timerH">
                    <div>{this.state.Minutes}</div>
                    <p>Minutes</p>
                  </div>
                  <div className="col-3 timerH">
                    <div>{this.state.Secondes}</div>
                    <p>Secondes</p>
                  </div>
                </div>

                <Link to="/" className="WoowLink">
                  Woo ! Flash Sale
                </Link>
                <Link to="/" className="WoowShop">
                  Shop Now
                </Link>
                <img src={require("./imges/product-img-1.jpg")} alt="imaageo" />
              </div>
              <div className="col-lg-6">
                <div className="mobCon">
                  <div>
                    <p>MOBILE APP VERSION</p>
                    <h2>
                      Get Our
                      <div className="text-danger d-inline">Mobile App</div>
                    </h2>
                    <h2>It’s Make easy for you life !</h2>
                  </div>
                  <div>
                    <img
                      src={require("./imges/play-store.png")}
                      className="m-2"
                      alt="imaageo"
                    />
                    <img
                      src={require("./imges/apple-store.png")}
                      className="m-2"
                      alt="imaageo"
                    />
                  </div>
                  <div className="mobdown">
                    <img
                      src={require("./imges/banner-1.3.png")}
                      alt="imaageo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <img
                      src={require("./imges/product-img-4.jpg")}
                      alt="top4"
                    />
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
                    <img
                      src={require("./imges/product-img-5.jpg")}
                      alt="top5"
                    />
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
                    <img
                      src={require("./imges/product-img-6.jpg")}
                      alt="top6"
                    />
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
                    <img
                      src={require("./imges/product-img-7.jpg")}
                      alt="top6"
                    />
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
              {/* <div className="col-6 LabLeftAd"></div> */}
            </div>
          </div>
        </section>
        <section>
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
        <section>
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
      </Fragment>
    );
  }
}

export default Ad;
