import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "../styles/Home.css";
export default function Home() {
  return (
    <Container fluid className="Container">
      <Row>
        <Col>1 of 3</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
