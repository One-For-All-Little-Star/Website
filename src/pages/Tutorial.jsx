import React from "react";
import "../styles/tutorial.css";
import { Row, Col } from "react-bootstrap";
import Multi from "../components/MultiCarousel";
import "../styles/carousel.css";
function Tutorial(props) {
  return (
    <div id="tutorial">
      <Row id="header_blank"></Row>
      <Row id="tuto_blank"></Row>
      <Col id="content_video">
        <h1> Little Star người bạn thân thiết của bé</h1>
        <p>
          Little Star cho bé một ứng dụng học với nội dung hiệu quả, giúp bé rèn
          luyện kỹ năng tiếng Việt.
          <br />
          Hơn thế nữa, Little Star cung cấp nội dung giải trí phù hợp với độ
          tuổi và thú vị giúp bé mở ra cánh cửa kiến thức và khơi dậy niềm cảm
          hứng với ngôn ngữ.
        </p>
      </Col>
      <Row id="container_carousel">
        <Multi />
      </Row>
    </div>
  );
}

export default Tutorial;
