import React from "react";
import "../styles/download.css";
import { Col, Row, Container } from "react-bootstrap";

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
            <div>
              <span>Tải ngay</span>
            </div>
          </Container>
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row id="header_blank"></Row>
    </div>
  );
}

export default Download;
