import React from "react";
import "../Styles/_ENavbar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLock,
  faRotate,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./imges/logo.svg";

function ENavbar() {
  return (
    <>
      <div className="navs back">
        <section className="nav1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12 firCon">
                <div className="firConChild">Account</div>
                <div className="firConChild">Track Order</div>
                <div className="firConChild">Support</div>
              </div>
              <div className="col-lg-2 col-sm-0"></div>
              <div className="col-lg-5 col-sm-12 selectCon">
                <select defaultValue="country">
                  <option disabled>country</option>
                  <option value="option1">Egypt</option>
                  <option value="option2">USA</option>
                  <option value="option3">China</option>
                </select>
                <select defaultValue="Currency">
                  <option disabled>Currency</option>
                  <option value="option1">Doller</option>
                  <option value="option2">Pound</option>
                </select>
                <select defaultValue="Languge">
                  <option disabled>Languge</option>
                  <option value="option1">Arabic</option>
                  <option value="option2">English</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="nav2">
          <div className="container">
            <div className="row secCon">
              <div className="col-lg-3 col-sm-12 secConChildOne">
                <img src={logo} alt="Logo" />
              </div>
              <div className="col-lg-6 col-sm-12 secConChildTwo">
                <form>
                  <input placeholder="Search" />
                  <button>Search</button>
                </form>
              </div>
              <div className="col-lg-3 col-sm-12  secConChildThree">
                <Link>
                  <FontAwesomeIcon icon={faHeart} />
                </Link>

                <Link>
                  <FontAwesomeIcon icon={faLock} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faRotate} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="nav3">
          <div className="container nav3Con">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav dropdownCon">
                    <li className="nav-item dropdown firstDropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home Page
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/contactus">
                            ContactUs
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/shop"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/contactus"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        <button> Become a Saller</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}

export default ENavbar;
