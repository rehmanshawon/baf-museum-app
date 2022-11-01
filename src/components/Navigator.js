import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./comp.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./Home";
import BangabandhuGallery from "./BangabandhuGallery";

function Navigation() {
  const visit = useRef(null);
  useEffect(() => {
    visit.current.click();
  }, []);
  return (
    <div>
      <div className="divNavigation">
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/Home" className="d-block d-md-none">
              VISIT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link as={Link} to="/Home" ref={visit}>
                  VISIT
                </Nav.Link>
                <NavDropdown
                  title="GALLERIES"
                  id="collasible-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item as={Link} to="/BangabandhuGallery">
                    BANGABANDHU GALLERY
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    EVOLUTION OF AIR AND SPACE POWER GALLERY
                  </NavDropdown.Item>
                  <NavDropdown.Item>AIR DEFENCE GALLERY</NavDropdown.Item>
                  <NavDropdown.Item>LIBERATION WAR GALLERY</NavDropdown.Item>
                  <NavDropdown.Item>
                    DEVELOPMENT OF BAF GALLERY
                  </NavDropdown.Item>
                  <NavDropdown.Item>SHEIKH HASIAN GALLERY</NavDropdown.Item>
                  <NavDropdown.Item>INTERACTIVE GALLERY</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="ARTIFACTS"
                  id="collasible-nav-dropdown2"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item>Aircraft</NavDropdown.Item>
                  <NavDropdown.Item>Eng and Hub</NavDropdown.Item>
                  <NavDropdown.Item>Armament</NavDropdown.Item>
                  <NavDropdown.Item>Radar and SAM</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="SPECIAL ATTRACTIONS"
                  id="collasible-nav-dropdown3"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item>
                    Birsreshtho Flight Lieutenant Matiur Rahman Holography
                    Theater
                  </NavDropdown.Item>
                  <NavDropdown.Item>Aircraft Simulator</NavDropdown.Item>
                  <NavDropdown.Item>VR Simulator</NavDropdown.Item>
                  <NavDropdown.Item>Sky TV</NavDropdown.Item>
                  <NavDropdown.Item>Kiloflight MiniCinema</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>WALKTHROUGH</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/Home" />;
            }}
          />
          <Route exact path="/Home" component={Home} />
          <Route
            exact
            path="/BangabandhuGallery"
            component={BangabandhuGallery}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Navigation;
