import React, { useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import Scrollspy from "react-scrollspy";
import "../styles/header.css";

function Header() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container id="header">
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <Scrollspy
              className="scrollspy"
              items={["home", "features", "tutorial"]}
              currentClassName="active"
            >
              <Link className="NavItem" to="home" smooth={true} duration={1000}>
                Trang Chủ
              </Link>
              <Link
                className="NavItem"
                to="features"
                smooth={true}
                duration={1000}
              >
                Tính Năng
              </Link>
              <Link
                className="NavItem"
                to="tutorial"
                smooth={true}
                duration={1000}
              >
                Hướng Dẫn
              </Link>
            </Scrollspy>
          </Nav>
        </Navbar>
        <Link to="home" className="logo_app">
          <img
            src="assets/images/logo/Logo.png"
            className="d-inline-block align-top"
            id="logo"
            alt="Little star logo"
          />
        </Link>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <Scrollspy
              className="scrollspy"
              items={["about", "contact", "download"]}
              currentClassName="active"
            >
              <Link
                className="NavItem"
                to="about"
                smooth={true}
                duration={1000}
              >
                Giới Thiệu
              </Link>
              <Link
                className="NavItem"
                to="contact"
                smooth={true}
                duration={1000}
              >
                Liên Hệ
              </Link>
              <Link
                className="NavItem"
                to="download"
                smooth={true}
                duration={1000}
              >
                Tải Về
              </Link>
            </Scrollspy>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
