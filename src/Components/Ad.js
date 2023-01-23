const { Component, Fragment } = require("react");

class Ad extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row picsCon">
              <div className="col-md-8  col-sm-12   picsConleft">
                <a href="">
                  <img src={require("./imges/banner-1.2.png")} />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 picsConRigth">
                <a href="">
                  <img src={require("./imges/banner-2.png")} />
                </a>

                <a href="">
                  <img src={require("./imges/banner-3.png")} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container fourCon">
            <div className="d-flex">
              <div className="icoCon">
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>{" "}
              </div>
              <div>
                <h4>Free Shipping</h4>
                <p>When ordering over $100</p>
              </div>
              <div className="icoCon">
                <i class="fa-solid fa-arrow-rotate-left"></i>{" "}
              </div>
              <div>
                <h4>Free Shipping</h4>
                <p>When ordering over $100</p>
              </div>
              <div className="icoCon">
                <i class="fa-solid fa-user-lock"></i>{" "}
              </div>
              <div>
                <h4>Free Shipping</h4>
                <p>When ordering over $100</p>
              </div>
              <div className="icoCon">
                <i class="fa-solid fa-trophy"></i>{" "}
              </div>
              <div>
                <h4>Free Shipping</h4>
                <p>When ordering over $100</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="gamerTop d-flex justify-content-between align-items-center mt-5">
              <h1>Gamer World</h1>
              <a href="">
                <h5>View More</h5>
              </a>
            </div>
            <div className="row gamerWorled">
              <div className="col-3 imgbg"></div>
              <div className="col-3 imgin">
                <img src={require("./imges/product-img-1.jpg")} />
              </div>
              <div className="col-3 imgin">
                <img src={require("./imges/product-img-3.jpg")} />
              </div>
              <div className="col-3 imgin">
                <img src={require("./imges/product-img-2.jpg")} />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Ad;
