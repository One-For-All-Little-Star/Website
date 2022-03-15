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
        <Col className="col_video">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/AW9lOIlGNqM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col id="content_video">
          <h1> Little Star người bạn thân thiết của bé</h1>
          <p>
            Little Star cho bé một chương trình học và nội dung hiệu quả, giúp
            bé rèn luyện tiếng Việt.
            <br />
            Hơn thế nữa, Little Star cung cấp nội dung phù hợp thú vị giúp bé mở
            ra cánh cửa kiến thức và khơi dậy niềm cảm hứng với ngôn ngữ.
          </p>
        </Col>
      </Row>
      <Row id="container_carousel">
        <Multi />
      </Row>
    </div>
  );
}

export default Tutorial;
