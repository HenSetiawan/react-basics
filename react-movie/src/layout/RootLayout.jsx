/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";

function RootLayout() {
  const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY >= 50 ? setIsScroll(true) : setIsScroll(false);
      });
    }, []);
  return (
    <>
      {" "}
      <Navbar
        style={{
          backgroundColor: isScroll ? `black` : '',
        }}
        expand="lg"
        className="navbar-light fixed-top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cinemy.vercel.app/static/media/hbo-max.3f5b5fccd68811672ab05eb95dce13a9.svg"
              alt="brand"
              className="img-fluid"
              width="120px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-2">
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
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
