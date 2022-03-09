import React from "react";
import "../styles/tutorial.css";
import { Row, Col } from "react-bootstrap";
import Multi from "../components/MultiCarousel";
import "../styles/carousel.css";
function Tutorial(props) {
  return (
    <div id="tutorial">
      <Row id="header_blank"></Row>
      <Row id="banner_video">
        <Col>
          <iframe
            id="video"
            src="https://www.youtube.com/embed/VSapCTmw31g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col id="content_video"></Col>
      </Row>
      <Row id="multi_img">
        <Multi></Multi>
      </Row>
    </div>
  );
}

export default Tutorial;
