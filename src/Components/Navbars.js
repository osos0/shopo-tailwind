import { Fragment } from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";

function Navbars() {
  return (
    <Fragment>
      <section className="Navo1">
        <div className="container boarder">
          <div className="row">
            <div className="col-sm-6 topAccount">
              <a href="">Account</a>
              <a href="">Track Order</a>
              <a href="">Support</a>
            </div>
            <div className="col-sm-6 topAccountRight">
              <Navbar bg="red">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown title="Country" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Egypt
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          United States
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Currency" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Doller
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Pound
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Languge" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          English
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Arabic
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
      <section className="Navo2">
        <div className="container">
          <div className="row">
            <div className="col-8 d-flex justify-content-between">
              <a href="">
                <img src={require("./imges/logo.jpg")} />
              </a>
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button id="btnNav">Search</Button>
              </Form>
            </div>

            <div className="col-4 text-center d-flex justify-content-end notis">
              <a href="">
                <i className="fa-solid fa-arrows-rotate"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-heart"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-lock"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-user"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="Navo3">
        <div className="container">
          <Navbar expand="lg" className="fixbackground">
            <Container fluid>
              <NavDropdown title="All Categories" id="navbarScrollingDropdown1">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <NavDropdown title="Homepage" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Shop" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Privacy Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Terms and Conditions
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Shop Category Icon
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Shop List View
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">About</Nav.Link>
                  <Nav.Link href="#action1">Blog</Nav.Link>
                  <Nav.Link href="#action1">Contact</Nav.Link>
                </Nav>
                <Button id="btnNav">Become a Seller</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </section>
    </Fragment>
  );
}

export default Navbars;
