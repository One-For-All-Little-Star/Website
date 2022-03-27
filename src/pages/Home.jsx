import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/Home.css";
import { MdOutlineTaskAlt } from "react-icons/md";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div id="home">
      <Row id="header_blank"></Row>
      <Row>
        <Col id="col_content_home">
          <Row id="home_blank"></Row>
          <div className="content_home">
            <h2>Little Star</h2>
            <p>
              Ứng dụng học tiếng việt và xem truyện tranh cho bé từ 3 đến 7.
            </p>
            <Row>
              <Col className="row_item_home">
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Nội dung phù hợp
                </div>
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Bé được chơi mà học
                </div>
              </Col>
              <Col className="row_item_home">
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Học mọi lúc mọi nơi
                </div>
                <div className="item_home">
                  <MdOutlineTaskAlt className="icon_task" />
                  &nbsp; Luyện nghe, nói, viết
                </div>
              </Col>
            </Row>
            <button className="custom-btn btn_home">
              <Link
                className="NavItem"
                to="download"
                activeClass="highlight"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                isDynamic={true}
              >
                Tải Ngay
              </Link>
            </button>
          </div>
        </Col>
        <div className="mockup_home">
          <img
            src="assets/images/home/mockup.png"
            className="d-inline-block"
            id="mockup"
            alt="Little star logo"
          />
        </div>
      </Row>
    </div>
  );
}
