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
      <Row>
        <Col lg="6" id="col_phone">
          <Row id="col_phone_row">
            <Col lg="3"></Col>
            <Col lg="9">
              <div id="background">
                <div className="overlay">
                  <div className="col-sm-9" id="phone_form">
                    <div id="content_icon">
                      <img
                        src="assets/images/contact/call-now.gif"
                        id="icon_phone"
                      />
                    </div>
                    <br />
                    <h5>
                      Bạn có thể liên hệ trực tiếp với chúng tôi thông qua số
                      điện thoại
                    </h5>
                    <br />
                    <Button className="btn_contact" href="tel:0829970447">
                      <FiPhoneCall id="phone_icon" />
                      &nbsp; <span className="numberPhone">0829970447 </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <ContactForm></ContactForm>
        </Col>
      </Row>
      <Row id="header_blank"></Row>
    </div>
  );
}

export default Contact;
