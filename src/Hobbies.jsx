import React, { Component } from "react";
import Image from "react-graceful-image";
import flagIMG1 from "./img/flag-portrait.jpg";
import cardIMG1 from "./img/card1.jpg";
import bambam from "./img/bambam1.jpg";
import vig1 from './img/Vignesh.PNG';

export class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies-cont">
        <p className="hobbies-anchor" id="hobbies" />
        <h1 className="subheader">Hobbies:</h1>
        <div id="hobby0" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header-hob">Illustration</h3>
            <p className="about-text">
              Nowadays, I love drawing in my spare moments, both on my iPad and a traditional sketchbook. I'm a big fan of stylized portraits, poses, and character design. Some of my biggest art inspirations are J.C. Leyendecker, Glen Keane, Jin Kim, and more recently TB Choi and Ethan Becker.
              Currently, I'm working on starting an instagram account for my illustration and animation journey. Here is a stylized portrait commissioned by a friend.
            </p>
          </div>
          <div>
            <Image src={vig1} alt="vig1" className="vig1" />
          </div>
        </div>
        <div id="hobby1" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header-hob">Ultimate Frisbee</h3>
            <p className="about-text">
              Ever since my year abroad in
              Hangzhou, I have found my love for this sport. After
              driving the formation of the Chinese
              International School team, I formed my own team when I transferred
              to Groton School. I've found that I enjoy nothing
              more than meeting new people and playing the game, win or lose. I
              used to captain Carnegie Mellon's team, Harmful, and I played
              for Hong Kong in the 2018 WFDF World Championships (U24 Mixed
              Division).
            </p>
          </div>
          <div>
            <Image src={flagIMG1} alt="flagIMG1" className="flag-img-cont" />
          </div>
        </div>
        <div id="hobby2" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header-hob">Playing Cards</h3>
            <p className="about-text">
              I collect decks of playing cards. Early in my academic years,
              there was a coding project that I struggled with related to simulating a deck of playing cards. I had
              to handle a deck of cards throughout that project, modelling
              in real life what I was to do on screen. Ever since, I have
              enjoyed playing with, handling, and looking at quality playing
              cards. A deck of cards is a combination of
              mathematical complexity, creative design, and simple fun. I also
              love the feeling of stumping my friends with a new magic trick. I now have over 100 decks of cards.
            </p>
          </div>
          <div>
            <Image src={cardIMG1} alt="cardIMG1" className="card-img-cont" />
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
          <Image src={bambam} alt="bambam" className="bambam-img" />
        </div>
      </div>
    );
  }
}

export default Hobbies;
