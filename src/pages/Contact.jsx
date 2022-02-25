import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/Form";
import "../styles/contact.css";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

function Contact(props) {
  return (
    <div id="contact">
      <Row id="header_blank"></Row>
      <Row>
        <Col lg="1"></Col>
        <Col lg="5">
          <Container id="phone_form">
            <h5>
              Bạn có thể liên hệ trực tiếp với chúng tôi thông qua số điện thoại
            </h5>
            <br />
            <Button
              variant="warning"
              className="btn_contact"
              href="tel:0829970447"
            >
              <FiPhoneCall id="phone_icon" />
              &nbsp; <span className="numberPhone">0829970447 </span>
            </Button>
          </Container>
          <br />
          <Container id="phone_form"></Container>
        </Col>

        <Col lg="6">
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
