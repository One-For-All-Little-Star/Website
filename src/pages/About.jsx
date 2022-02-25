import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "../components/CarouselPage";
import "../styles/about.css";

function About(props) {
  return (
    <div id="about">
      <Row id="header_blank"></Row>
      <Row>
        <div className="col-sm-1"></div>
        <Container className="col-sm-6">
          <Carousel></Carousel>
        </Container>
        <div className="col-sm-5"></div>
      </Row>
    </div>
  );
}

export default About;
