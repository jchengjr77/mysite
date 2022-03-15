import React, { Component } from "react";
import peaceSign from "./img/peace-sign.JPG";
import cardPhoto from "./img/cards.JPG";
import layout from "./img/layout.JPG";
import shane from './img/shane.PNG';
import max from './img/max_grecke_1.PNG';
import phoenix from './img/phoenix1.PNG';
// import SlideShow from "react-image-show";
import Carousel from "nuka-carousel";
import Image from "react-graceful-image";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-cont">
        <p className="gallery-anchor" id="gallery" href="" />
        <Carousel
          slidesToShow={2}
          cellSpacing={20}
          width="920px"
          height="auto"
          cellAlign="center"
          className="gallery-slideshow"
        >
          <Image src={peaceSign} alt="peaceSign" />
          <Image src={shane} alt="Shane" />
          <Image src={cardPhoto} alt="cardPhoto" />
          <Image src={max} alt="maxgrecke" />
          <Image src={phoenix} alt="phoenix" />
          <Image src={layout} alt="layout" />
        </Carousel>
        {/* <SlideShow
          id="gallery-slideshow"
          images={addressArray}
          width="px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          fixedImagesHeight
        /> */}
      </div>
    );
  }
}

export default Gallery;
