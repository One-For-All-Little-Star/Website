import React from "react";
import { Carousel } from "3d-react-carousal";

function CarouselPage() {
  let slides = [
    <img id="carousel_img" src="assets/images/characters/huy.jpg" alt="1" />,
    <img id="carousel_img" src="assets/images/characters/luong.jpg" alt="2" />,
    <img id="carousel_img" src="assets/images/characters/nga.jpg" alt="3" />,
    <img id="carousel_img" src="assets/images/characters/tuan.jpg" alt="4" />,
    <img id="carousel_img" src="assets/images/characters/diem.jpg" alt="5" />,
  ];

  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
}

export default CarouselPage;
