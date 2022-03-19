import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";
import "../styles/carousel.css";

class Multicarousel extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel responsive={responsive} className="container_carousel">
        <div className="mean">
          <Image
            className="carousel_elm"
            src="assets/images/introduction/home.png"
          />
        </div>
        <div className="mean">
          <Image
            className="carousel_elm"
            src="assets/images/introduction/letter.png"
          />
        </div>
        <div className="mean">
          <Image
            className="carousel_elm"
            src="assets/images/introduction/level.png"
          />
        </div>
        <div className="mean">
          <Image
            className="carousel_elm"
            src="assets/images/introduction/video.png"
          />
        </div>
        <div className="mean">
          <Image
            className="carousel_elm"
            src="assets/images/introduction/video.png"
          />
        </div>
      </Carousel>
    );
  }
}

export default Multicarousel;
