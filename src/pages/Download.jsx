import React from "react";
import "../styles/download.css";
import { Col, Row } from "react-bootstrap";

function Download(props) {
  return (
    <div id="download">
      <Row id="header_blank"></Row>
      <Row id="header_blank"></Row>
      <Row id="header_blank"></Row>
      <Row id="header_blank"></Row>
      <Row id="header_blank">
        <Col lg="4"></Col>
        <Col lg="4">
          <a
            className="btn_download"
            href="https://drive.google.com/u/1/uc?id=181Mpg0I8wA8ze_0PeKNhbiPEiuxVGujo&export=download"
          >
            Tải ngay
          </a>
        </Col>
        <Col lg="4"></Col>
      </Row>
    </div>
  );
}

export default Download;
