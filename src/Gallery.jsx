import React, { Component } from "react";
import peaceSign from "./img/peace-sign.JPG";
import cardPhoto from "./img/cards.JPG";
import layout from "./img/layout.JPG";
import greenShadows from "./img/green-shadows.JPG";
import throwing from "./img/throw.JPG";
// import SlideShow from "react-image-show";
import Carousel from "nuka-carousel";

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
          <img src={peaceSign} alt="peaceSign"></img>
          <img src={cardPhoto} alt="cardPhoto"></img>
          <img src={greenShadows} alt="greenShadows"></img>
          <img src={layout} alt="layout"></img>
          <img src={throwing} alt="throwing"></img>
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
