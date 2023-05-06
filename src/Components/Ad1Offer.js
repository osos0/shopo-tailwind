import { Link } from "react-router-dom";

const { Component, Fragment } = require("react");

class AdOffer extends Component {
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
      </Fragment>
    );
  }
}

export default AdOffer;
