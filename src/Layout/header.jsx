import React, { useState, useEffect } from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import "../styles/header.css";
function Header(props) {
  return (
    <Navbar expand="lg" fixed="top">
      <Container id="header">
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="NavItem" href="#home">
              Trang Chủ
            </Nav.Link>
            <Nav.Link className="NavItem" href="#features">
              Tính Năng
            </Nav.Link>
            <Nav.Link className="NavItem" href="#tutorial">
              Hướng Dẫn
            </Nav.Link>
          </Nav>
        </Navbar>
        <Navbar href="#home">
          <img
            src="assets/images/logo/Logo.png"
            className="d-inline-block align-top"
            id="logo"
            alt="Little star logo"
          />
        </Navbar>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="NavItem" href="#about">
              Giới Thiệu
            </Nav.Link>
            <Nav.Link className="NavItem" href="#contact">
              Liện Hệ
            </Nav.Link>
            <Nav.Link className="NavItem" href="#download">
              Tải Về
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
