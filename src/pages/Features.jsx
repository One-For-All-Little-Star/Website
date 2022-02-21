import React from "react";
import "../styles/feature.css";
import { Button, Col, Row, Container } from "react-bootstrap";
import "../styles/index.css";
function Features(props) {
  return (
    <div id="features" className="transition-fade">
      <Row id="header_blank"></Row>
      <Row>
        <div className="col-sm-0.5"></div>
        <Container className="col-sm-9" id="container_feature">
          <h1>Chức năng</h1>
          <Row>
            <div className="col-sm-4">
              {/* Circle 1*/}
              <div className="ih-item circle effect2 left_to_right">
                <a href="#">
                  <div className="img">
                    <img src="assets/images/feature/letter.jpg" alt="img" />
                  </div>
                  <div className="info">
                    <h3>
                      Học chữ <br /> Học vần
                    </h3>
                  </div>
                </a>
                <p className="content_feature">
                  Bé học qua chữ,vần qua hình ảnh sinh động
                </p>
              </div>
              {/* end normal */}
            </div>
            <div className="col-sm-4">
              {/* Circle 2 */}
              <div className="ih-item circle effect2 left_to_right">
                <a href="#">
                  <div className="img">
                    <img src="assets/images/feature/fairy.jpg" alt="img" />
                  </div>
                  <div className="info">
                    <h3>Xem truyện cổ tích</h3>
                  </div>
                </a>
                <p className="content_feature">
                  Những nội dung truyện cổ tích được chọn lọc
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              {/* Circle 3 */}
              <div className="ih-item circle effect2 left_to_right">
                <a href="#">
                  <div className="img">
                    <img src="assets/images/feature/level map.png" alt="img" />
                  </div>
                  <div className="info">
                    <h3>Theo dõi quá trình</h3>
                  </div>
                </a>
                <p className="content_feature">
                  Giúp bố mẹ theo dõi tiến độ học tập và nội dung của bé{" "}
                </p>
              </div>
            </div>
          </Row>
        </Container>
        <div className="col-sm-3">
          <img src="assets/images/feature/fairy.jpg" alt="" />
        </div>
      </Row>
    </div>
  );
}

export default Features;
