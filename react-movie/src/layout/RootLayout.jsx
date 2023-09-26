/* eslint-disable react/jsx-key */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CaraouseItem from "../component/CaraouseItem";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <CaraouseItem
    title="One Piece"
    type="Series"
    description="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in perferendis
      tempore asperiores, consectetur corporis molestias ipsam facilis voluptas
      nobis?"
  />,
];

function RootLayout() {
  return (
    <>
      {" "}
      <Navbar expand="lg" className="navbar-light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cinemy.vercel.app/static/media/hbo-max.3f5b5fccd68811672ab05eb95dce13a9.svg"
              alt="brand"
              className="img-fluid"
              width="150px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-3">
              <Nav.Link className="text-uppercase text-nav" href="#home">
                <div className="d-flex align-items-center">
                  <AiFillHome />
                  <span className="ms-1">Home</span>
                </div>
              </Nav.Link>
              <Nav.Link className="text-uppercase text-nav" href="#link">
                <div className="d-flex align-items-center">
                  <AiFillFire />
                  <span className="ms-1">Trending</span>
                </div>
              </Nav.Link>
              <Nav.Link className="text-uppercase text-nav" href="#link">
                <div className="d-flex align-items-center">
                  <RiMovie2Fill />
                  <span className="ms-1">Movies</span>
                </div>
              </Nav.Link>
              <Nav.Link className="text-uppercase text-nav" href="#link">
                <div className="d-flex align-items-center">
                  <PiTelevisionBold />
                  <span className="ms-1">TvSeries</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="caraousel-top">
        <AliceCarousel
          infinite
          autoPlay
          disableButtonsControls
          disableDotsControls
          mouseTracking
          autoPlayInterval={2000}
          items={items}
        />
      </div>
    </>
  );
}

export default RootLayout;
