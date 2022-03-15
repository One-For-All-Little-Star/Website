import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/Home.css";
import { MdOutlineTaskAlt } from "react-icons/md";
export default function Home() {
  return (
    <Container fluid className="transition-fade" id="home">
      <Row id="header_blank"></Row>
      <Row>
        <Col id="col_content_home">
          <Row id="header_blank"></Row>
          <div className="content_home">
            <h2>Little Star</h2>
            <p>Ứng dụng trò chơi học và xem tiếng việt cho bé từ 3 đến 7.</p>
            <Row>
              <Col>
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Chương trình dễ hiểu
                </div>
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Bé được chơi mà học
                </div>
              </Col>
              <Col className="row_item_home">
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Mọi lúc mọi nơi
                </div>
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Luyện nghe, nói, viết
                </div>
              </Col>
            </Row>
            <button className="custom-btn btn_home"> Tải ngay </button>
          </div>
        </Col>
        <Col className="mockup_home">
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
