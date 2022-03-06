import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "../components/CarouselPage";
import "../styles/about.css";

function About() {
  return (
    <div id="about">
      <Row id="header_blank"></Row>
      <Row>
        <div className="col-sm-1"></div>
        <div className="col-sm-4" id="content_about">
          <h1>Sứ mệnh</h1>
          <p>
            Chúng tôi mong muốn góp phần vào sứ mệnh giáo dục nước nhà. Nhằm
            giúp các em nhỏ tăng khả năng tiếp thu ngôn ngữ đặc biệt là ngôn ngữ
            tiếng việt, hỗ trợ cho quá trình học tập và tạo hứng thú, động lực
            cho trẻ. Ngoài ra, để tránh các em tiếp xúc với nội dung độc hại,
            phản cảm chúng tôi cung cấp nội dung truyện cổ tích phù hợp với lứa
            tuổi thiếu nhi.
          </p>
        </div>

        <Container className="col-sm-6">
          <Carousel></Carousel>
        </Container>
        <div className="col-sm-1"></div>
      </Row>
    </div>
  );
}

export default About;
