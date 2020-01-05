import React, { Component } from "react";
import flagIMG1 from "./img/flag-portrait.jpg";
import flagIMG2 from "./img/flag-candid.jpg";
import hkteamIMG from "./img/hkteam.JPG";
import harmfulIMG1 from "./img/harmful.JPG";
import vertIMG from "./img/vert.JPG";

import cardIMG1 from "./img/card1.jpg";
import cardIMG2 from "./img/card2.jpg";
import cardIMG3 from "./img/card3.jpg";
import cardIMG4 from "./img/card4.jpg";
import cardIMG5 from "./img/card5.jpg";

import bambam from "./img/bambam1.jpg";

import SlideShow2 from "react-image-show";

const addressArray3 = [flagIMG1, hkteamIMG, harmfulIMG1, vertIMG, flagIMG2];
const addressArray2 = [cardIMG1, cardIMG2, cardIMG3, cardIMG4, cardIMG5];

export class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies-cont">
        <p className="hobbies-anchor" id="hobbies" />
        <h1 className="subheader">Hobbies:</h1>
        <div id="hobby1" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header-hob">Ultimate Frisbee</h3>
            <p className="about-text">
              Ultimate is my main pastime. Ever since my freshman year abroad in
              Hangzhou, China, I have found my love for this sport. After
              driving and learning from the formation of the Chinese
              International School team, I formed my own team when I transferred
              to Groton School. I've found that, though I have won my fair share
              of games and tournaments in Hong Kong and China, I enjoy nothing
              more than meeting new people and playing the game, win or lose. I
              currently captain Carnegie Mellon's team, Harmful, and I played
              for Hong Kong in the recent WFDF World Championships (U24 Mixed
              Division). I plan to continue improving and sharing the sport I
              love.
            </p>
          </div>
          <div>
            <img src={flagIMG1} alt="flagIMG1" className="flag-img-cont" />
          </div>
        </div>
        <div id="hobby2" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header-hob">Playing Cards</h3>
            <p className="about-text">
              I collect decks of playing cards. Early in my academic years,
              there was a coding project that I really struggled with. It was
              related to simulating a deck of playing cards. By necessity, I had
              to handle a deck of playing cards during that project, modelling
              in real life what I was to do on screen. Ever since, I have
              enjoyed playing with, handling, and looking at quality playing
              cards. To me, a deck of cards is a superb combination of
              mathematical complexity, creative design, and simple fun. I also
              enjoy the look of befuzzlement my friends display when I stump
              them with a new magic trick. Oh, and I love using Portrait mode on
              my decks.
            </p>
          </div>
          <div>
            {/* <SlideShow2
              id="hobbies-slideshow-2"
              images={addressArray2}
              width="500px"
              imagesWidth="400px"
              imagesHeight="250px"
              imagesHeightMobile="56vw"
              thumbnailsWidth="500px"
              thumbnailsHeight="12vw"
              indicators
              thumbnails
              fixedImagesHeight
            /> */}
            <img src={cardIMG1} alt="cardIMG1" className="card-img-cont" />
          </div>
        </div>
        <div id="hobby3" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header-hob">Bam Bam</h3>
            <p className="about-text">
              I have a dog, and his name is Bambam. He's the best. If you would
              like more of his photographic goodness, follow &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/such_dog_much_white/"
              >
                @such_dog_much_white
              </a>
              &nbsp; on Instagram!
            </p>
          </div>
          <img src={bambam} alt="bambam" className="bambam-img" />
        </div>
      </div>
    );
  }
}

export default Hobbies;
