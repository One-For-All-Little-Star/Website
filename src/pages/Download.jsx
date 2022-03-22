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
      <Row id="header_blank"></Row>
      <Row id="header_blank">
        <Col lg="4"></Col>
        <Col lg="4">
          <a
            className="btn_download"
            href="https://drive.google.com/file/d/1eKx2xy5L0pThYEsimYRFJPjhwSn-c7AW/view?usp=sharing"
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
