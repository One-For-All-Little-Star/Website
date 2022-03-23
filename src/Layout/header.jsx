import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles/header.css";
import MenuMobile from "../components/MenuMobile";

function Header() {
  return (
    <Navbar id="header" expand="lg" fixed="top">
      <Container id="con-id">
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <Link
              activeClass="highlight"
              className="NavItem"
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
            >
              Trang Chủ
            </Link>
            <Link
              className="NavItem"
              to="tutorial"
              activeClass="highlight"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
            >
              Giới thiệu
            </Link>
            <Link
              className="NavItem"
              to="features"
              activeClass="highlight"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
            >
              Tính Năng
            </Link>
          </Nav>
        </Navbar>
        <Navbar.Brand href="#home" className="logo_app">
          <img
            src="assets/images/logo/Logo.png"
            className="d-inline-block align-top"
            id="logo"
            alt="Little star logo"
          />
        </Navbar.Brand>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <Link
              className="NavItem"
              to="about"
              activeClass="highlight"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
            >
              Chúng tôi
            </Link>
            <Link
              className="NavItem"
              to="contact"
              activeClass="highlight"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
            >
              Liên Hệ
            </Link>
            <Link
              className="NavItem"
              to="download"
              activeClass="highlight"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
            >
              Tải Về
            </Link>
          </Nav>
        </Navbar>
      </Container>
      <MenuMobile id="menuMobile" />
    </Navbar>
  );
}

export default Header;
