import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles/header.css";

function Header() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container id="header">
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <button className="btn-header">
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
            </button>
            <button className="btn-header">
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
            </button>
            <button className="btn-header">
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
                Hướng Dẫn
              </Link>
            </button>
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
            <button className="btn-header">
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
                Giới Thiệu
              </Link>
            </button>
            <button className="btn-header">
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
            </button>
            <button className="btn-header">
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
            </button>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
