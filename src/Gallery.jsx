import React, { Component } from "react";
import peaceSign from "./img/peace-sign.JPG";
import cardPhoto from "./img/cards.JPG";
import layout from "./img/layout.JPG";
import greenShadows from "./img/green-shadows.JPG";
import throwing from "./img/throw.JPG";
import SlideShow from "react-image-show";

const addressArray = [peaceSign, cardPhoto, layout, greenShadows, throwing];

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-cont">
          <p className="gallery-anchor" id="gallery" href=""/>
        <SlideShow
          images={addressArray}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          fixedImagesHeight
        />
      </div>
    );
  }
}

export default Gallery;
