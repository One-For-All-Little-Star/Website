import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";

import "../styles/header.css";

function Header(props) {
  return (
    <Navbar expand="lg" fixed="top">
      <Container id="header">
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
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
          </Nav>
        </Navbar>
        <Link to="home">
          <img
            src="assets/images/logo/Logo.png"
            className="d-inline-block align-top"
            id="logo"
            alt="Little star logo"
          />
        </Link>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="NavItem" to="about" smooth={true} duration={1000}>
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
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
