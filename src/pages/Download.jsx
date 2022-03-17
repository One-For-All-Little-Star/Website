import React from "react";
import "../styles/download.css";
import { Button, Col, Row, Container } from "react-bootstrap";
import { HiDownload } from "react-icons/hi";

function Download(props) {
  return (
    <div id="download">
      <Row id="header_blank"></Row>
      <Row id="header_blank"></Row>
      <Row id="header_blank"></Row>
      <Row id="header_blank">
        <Col lg="8"></Col>
        <Col lg="2">
          <Container className="btn_download">
            <a
              className="link-app"
              href="https://drive.google.com/file/d/1eKx2xy5L0pThYEsimYRFJPjhwSn-c7AW/view?usp=sharing"
            >
              Tải ngay
            </a>
          </Container>
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row id="header_blank"></Row>
    </div>
  );
}

export default Download;
