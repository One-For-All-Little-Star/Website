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
            href="https://drive.google.com/file/d/181Mpg0I8wA8ze_0PeKNhbiPEiuxVGujo/view?usp=sharing"
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
