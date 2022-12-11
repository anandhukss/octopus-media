import React from "react";
import "./Gallery.css";

import { Carousel } from "3d-react-carousal";

function Gallery() {
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    <div id="gallery" className="gallery-preview">
      <div className="carousel">
        <Carousel
          slides={slides}
          autoplay={true}
          interval={2000}
          arrows={true}
        />
      </div>
      <div className="gallery-text">
        <span className="small-text">THE</span> TRUE SIGN OF <br></br>{" "}
        INTELLIGENCE IS <br></br> NOT KNOWLEDGE, <br></br> BUT{" "}
        <span className="small-text">IMAGINATION</span>
      </div>
    </div>
  );
}

export default Gallery;
