import React from "react";
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
              currentClassName="highlight"
            >
              <a className="NavItem" href="#home">
                Trang Chủ
              </a>
              <a className="NavItem" href="#features">
                Tính Năng
              </a>
              <a className="NavItem" href="#tutorial">
                Hướng Dẫn
              </a>
            </Scrollspy>
          </Nav>
        </Navbar>
        <a href="#home" className="logo_app">
          <img
            src="assets/images/logo/Logo.png"
            className="d-inline-block align-top"
            id="logo"
            alt="Little star logo"
          />
        </a>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <Scrollspy
              className="scrollspy"
              items={["about", "contact", "download"]}
              currentClassName="highlight "
            >
              <a className="NavItem" href="#about">
                Giới Thiệu
              </a>
              <a className="NavItem" href="#contact">
                Liên Hệ
              </a>
              <a className="NavItem" href="#download">
                Tải Về
              </a>
            </Scrollspy>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
