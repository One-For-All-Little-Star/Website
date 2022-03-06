import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/Home.css";
export default function Home() {
  return (
    <Container fluid className="transition-fade" id="home">
      <Row id="header_blank"></Row>
      <Row>
        <Col lg="5" id="content_home">
          <Row id="header_blank"></Row>
          <div className="content_home">
            <h2>Little Star</h2>
            <p>
              Chào mừng đến với Little Star! Ứng dụng trò chơi dạy tiếng việt
              cho trẻ em từ 2 đến 7 tuổi tạo cảm giác hứng thú với những bài học
              hấp dẫn cùng với những câu đố thú vị đang chờ bạn. Còn chần chừ gì
              nữa hãy trải nghiệm ứng dụng ngay nào!
            </p>
            <button className="custom-btn btn_home"> Tải ngay </button>
          </div>
        </Col>
        <Col lg="7" className="mockup_home">
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
