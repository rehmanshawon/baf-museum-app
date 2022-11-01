import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollMenu from "./HorizontalScrollMenu";
import homeImage from "./images/Bangabandhu-Military-Museum-feature.jpg";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Card,
  Form,
  Image,
  Table,
  Accordion,
} from "react-bootstrap";

function Home() {
  const menuData = [
    {
      menuName: "Information regarding COVID-19",
      menuTarget: "#information-regarding-covid-19",
    },
    {
      menuName: "Hours and Admission",
      menuTarget: "#hours-admission",
    },
    {
      menuName: "Maps, Entrance and Directions",
      menuTarget: "#maps-entrance-directions",
    },
    {
      menuName: "Visitor Amenities",
      menuTarget: "#visitor-amenities",
    },
    {
      menuName: "Restaurants and Cafe",
      menuTarget: "#restaurants",
    },
    {
      menuName: "Family Visit",
      menuTarget: "#family-visit",
    },
    {
      menuName: "Group Visit",
      menuTarget: "#group-visit",
    },
    {
      menuName: "FAQ",
      menuTarget: "#faq",
    },
  ];
  return (
    <div className="home" style={{ overflow: "hidden" }}>
      <Container fluid>
        <Row className="mb-5" id="bannar">
          <Col md>
            <Image src={homeImage} fluid />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <ScrollMenu
              afterWhat={"bannar"}
              adjustBy={-150}
              menuData={menuData}
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <div id="information-regarding-covid-19">
              <h4 style={{ color: "red" }}>INFORMATION REGARDING COVID-19</h4>
              <hr />
              <p>
                Time-slot bookings are compulsory, including for free-admission
                visitors. In accordance with government recommendations, from 21
                July 2021 all visitors to the Museum aged 18 and over must show
                a Health Pass. From 30 September, this obligation will apply to
                all visitors aged 12 and over. All visitors aged 11 and over
                must wear face masks.
              </p>
            </div>
          </Col>
          <Col md>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mb-5" style={{ background: "#eeeeee" }}>
          <Col md>
            <div id="hours-admission">
              <h4 style={{ color: "blue" }}>Hours & Admission</h4>
              <hr />
              <h3>Opening Hours</h3>
              <p>
                The museum is open daily except Tuesdays. Last entry 1 hour
                before closure. Visitors will be asked to vacate the exhibition
                rooms 30 minutes before closure.
              </p>
            </div>
          </Col>
          <Col md>
            <Card className="text-center" style={{ background: "#eeeeee" }}>
              <Card.Header>The Musuem Opens</Card.Header>
              <Card.Body>
                <Card.Title>9:00 AM TO O6:00 PM</Card.Title>
                <Card.Text>
                  Monday, Wednesday, Thursday, Friday, Saturday and Sunday
                </Card.Text>
                <h3>CLOSED</h3>
              </Card.Body>
              <Card.Footer className="text-muted">Tuesday</Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5" style={{ background: "#eeeeee" }}>
          <Col md>
            <div id="ticket">
              <h4>Ticket prices</h4>
              <p>
                Tickets can be used to access both the permanent collections and
                temporary exhibitions. In line with the measures taken to
                prevent the spread of COVID-19, all visitors, including those
                eligible for free admission, must book a time slot.
              </p>
            </div>
          </Col>
          <Col md>
            <Table>
              <tbody>
                <tr>
                  <td>Ticket Price Adult</td>
                  <td>tk50</td>
                </tr>
                <tr>
                  <td>Ticket Price Children</td>
                  <td>Free</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <div id="maps-entrance-directions">
              <h4 style={{ color: "#008000" }}>MAP, ENTRANCES & DIRECTIONS</h4>
              <hr />
            </div>
          </Col>

          <Col md></Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <h3>Museum entrances</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md>
            <Image src="https://spectragroup.com.bd/wp-content/uploads/2021/08/Bangabandhu-Military-Museum-01.jpg"></Image>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <h3>Museum Maps and Important Locations</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md>
            <Image
              src={
                "https://www.daily-sun.com/assets/news_images/2020/10/12/thumbnails/Bangabandhu_Military_Museum-ds.jpg"
              }
            ></Image>
          </Col>
        </Row>
        <Row className="mb-5" style={{ background: "#303030", color: "white" }}>
          <Col md>
            <div id="visitor-amenities">
              <h3 style={{ color: "lightgreen" }}>VISITOR AMENITIES</h3>
              <hr />
              <h4>Welcoming visitors</h4>
              <p>
                Make the most of our services to enjoy your visit in optimal
                conditions. Staff members are at hand throughout the museum to
                provide up-to-date information on the museum and its amenities.
              </p>
            </div>
          </Col>
          <Col md></Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <div id="restaurants">
              <h3 style={{ color: "#db0a5b" }}>RESTAURANTS & CAFES</h3>
              <hr />
              <h4>Fancy a break and something to eat?</h4>
              <p>
                Choose from a wide range of restaurants, cafes and take-away
                counters in the beautiful palace setting and gardens.
              </p>
            </div>
          </Col>
          <Col md></Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <div id="family-visit">
              <h3 style={{ color: "#b200fd" }}>VISIT AS A FAMILY</h3>
              <hr />
              <h4>Fancy a break and something to eat?</h4>
              <p>
                Enjoy the Museum experience with your children at no extra cost
                – admission to the permanent collections and temporary
                exhibitions is free for all visitors under the age of 18. The
                museum also offers guided tours, practical workshops and
                storytelling sessions in the palace, as well as a selection of
                online media resources to be enjoyed at home.
              </p>
            </div>
          </Col>
          <Col md>
            <Image
              src={"https://www.touristplaces.com.bd/images/pp/6/p138685.jpg "}
            ></Image>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <div id="group-visit">
              <h3 style={{ color: "#007a7c" }}>VISIT AS A GROUP</h3>
              <hr />

              <p>
                The museum offers a range of activities and tools for visiting
                the museum with groups of school children, disabled visitors and
                more: how to organise your visit, training, Louvre Pro
                membership, etc.
              </p>
            </div>
          </Col>
          <Col md>
            <Image
              src={
                "https://media-cdn.tripadvisor.com/media/photo-s/10/a6/84/37/bangladesh-air-force.jpg"
              }
            ></Image>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md>
            <div id="faq">
              <h3 style={{ color: "tomato" }}>FAQ</h3>
              <hr />
              <h4>Frequently asked questions</h4>
              <p>Answers from the Museum.</p>
            </div>
          </Col>
          <Col md>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I visit the museum for free? Do I have to book tickets?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How can I buy a ticket at concession price?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row
          style={{
            background: "black",
            color: "white",
            padding: "30px",
            textAlign: "left",
          }}
        >
          <Col md>
            <h4>ABOUT</h4>
            <a>Visitor Rules</a>
          </Col>
          <Col md>
            <h4>OUR WEBSITES</h4>
            <a> Online ticketing service</a>
            <br />
            <a>Online Boutique</a>
            <br />
            <a>Collection</a>
            <br />
            <a>Editions</a>
            <br />
            <a>Press</a>
            <br />
          </Col>
          <Col md>
            <h4>CONTACT</h4>
            <a> FAQ</a>
            <br />
            <a>Contact us</a>
            <br />
            <a>Give us your feedback!</a>
            <br />
            <a>Private Events and Film Shoots</a>
            <br />
          </Col>
          <Col md>
            <div className="vr d-none d-md-block"></div>
          </Col>
          <Col md>
            <h4>FOLLOW US</h4>
            <div style={{ padding: "20px" }}>
              <span className="foot-social-links">
                <Image src="https://cdn.shopify.com/s/files/1/0258/3281/6688/t/13/assets/facebook.svg" />
              </span>
              <span className="foot-social-links">
                <Image src="https://cdn.shopify.com/s/files/1/0258/3281/6688/t/13/assets/twitter.svg" />
              </span>

              <span className="foot-social-links">
                <Image src="https://cdn.shopify.com/s/files/1/0258/3281/6688/t/13/assets/youtube.svg" />
              </span>
            </div>
          </Col>
        </Row>
        <Row style={{ background: "black", color: "white", padding: "5px" }}>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row
          style={{
            background: "black",
            color: "white",
            padding: "5px",
          }}
        >
          <Col md>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ padding: "10px", float: "left" }}>Legal Notice</div>
              <div style={{ padding: "10px", float: "left" }}>
                Privacy Policy
              </div>
              <div style={{ padding: "10px", float: "left" }}>Cookies</div>
              <div style={{ padding: "10px", float: "left" }}>Credits</div>
              <div style={{ padding: "10px", float: "left" }}>Copyright</div>
              <div style={{ padding: "10px", float: "left" }}>Developer</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
