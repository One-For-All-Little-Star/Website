import React from "react";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../components/Form";
import "../styles/contact.css";

function Contact(props) {
  return (
    <div id="contact">
      <Row id="header_blank"></Row>
      <Row id="container-contact">
        <Col lg="6" id="div_form">
          <ContactForm></ContactForm>
        </Col>
        <Col lg="6" id="col_phone">
          <Row id="col_phone_row">
            <Col lg="9">
              <div id="background">
                <Row id="header_blank"></Row>
                <Row className="content_contact">
                  <h5>
                    Liên hệ trực tiếp với chúng tôi thông qua số điện thoại
                  </h5>
                  <a className="btn_contact" href="tel:0829970447">
                    0829970447
                  </a>
                </Row>
                <div className="blank_contact"></div>
              </div>
            </Col>
            <Col id="col_blank"></Col>
          </Row>
        </Col>
      </Row>
      <Row id="header_blank"></Row>
    </div>
  );
}

export default Contact;
