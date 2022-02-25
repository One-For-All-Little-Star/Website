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
        <Col lg="1"></Col>
        <Col lg="1"></Col>
        <Col lg="1"></Col>
        <Col lg="1"></Col>
        <Col lg="1">
          <img
            src="assets/images/download/google-play-button.svg"
            className="d-inline-block"
            id="googlePlay"
          />
        </Col>
        <Col lg="1"></Col>
        <Col lg="1"></Col>
        <Col lg="1">
          <Container className="btn_download">
            <div>
              <span>Tải ngay</span>
              <br />
              <HiDownload id="icon_download" />
            </div>
          </Container>
        </Col>
        <Col lg="1"></Col>
        <Col lg="1"></Col>
        <Col lg="1"></Col>
        <Col lg="1"></Col>
      </Row>
      <Row id="header_blank"></Row>
    </div>
  );
}

export default Download;
