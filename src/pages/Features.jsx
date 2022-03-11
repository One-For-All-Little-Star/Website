import React from "react";
import "../styles/feature.css";
import { Row, Container } from "react-bootstrap";
function Features() {
  return (
    <div id="features" className="transition-fade">
      <Row id="header_blank"></Row>
      <Row>
        <Container className="col-sm-9" id="container_feature">
          <Row>
            <div className="col-sm-4">
              {/* Circle 1*/}
              <div className="ih-item circle colored effect2 left_to_right">
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
                  Bé học chữ, vần qua hình ảnh sinh động, vui nhộn giúp trẻ tiếp
                  thu tốt hơn
                </p>
              </div>
              {/* end normal */}
            </div>
            <div className="col-sm-4">
              {/* Circle 2 */}
              <div className="ih-item circle colored effect2 left_to_right">
                <a href="#">
                  <div className="img">
                    <img src="assets/images/feature/fairy.jpg" alt="img" />
                  </div>
                  <div className="info">
                    <h3>Xem truyện cổ tích</h3>
                  </div>
                </a>
                <p className="content_feature">
                  Những nội dung truyện cổ tích được chọn lọc có nội dung phù
                  hợp với lứa tuổi của trẻ
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              {/* Circle 3 */}
              <div className="ih-item circle colored effect2 left_to_right">
                <a href="#">
                  <div className="img">
                    <img src="assets/images/feature/level map.png" alt="img" />
                  </div>
                  <div className="info">
                    <h3>Theo dõi Học tập</h3>
                  </div>
                </a>
                <p className="content_feature">
                  Giúp bố mẹ theo dõi tiến độ học tập và nội dung của bé đang
                  theo học và xem
                </p>
              </div>
            </div>
          </Row>
        </Container>
        <div className="col-sm-3">
          <img
            id="img_feature"
            src="assets/images/characters/full_huy.png"
            alt=""
          />
        </div>
      </Row>
    </div>
  );
}

export default Features;
