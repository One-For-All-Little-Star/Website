import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ContactForm from "../components/Form";
import "../styles/contact.css";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

function Contact(props) {
  return (
    <div id="contact">
      <Row id="header_blank"></Row>
      <Row id="container-contact">
        <Col lg="6">
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
                  <button className="btn_contact" href="tel:0829970447">
                    <FiPhoneCall id="phone_icon" />
                    &nbsp; <span className="numberPhone">0829970447 </span>
                  </button>
                </Row>
                <div className="blank_contact"></div>
              </div>
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Col>
      </Row>
      <Row id="header_blank"></Row>
    </div>
  );
}

export default Contact;
