import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "../styles/Home.css";
export default function Home() {
  return (
    <Container fluid className="transition-fade" id="home">
      <Row id="header_blank"></Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <img
            src="assets/images/home/mockup.png"
            className="d-inline-block"
            id="mockup"
            alt="Little star logo"
          />
        </Col>
      </Row>
    </Container>
  );
}
