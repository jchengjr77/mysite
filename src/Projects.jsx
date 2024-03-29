import React, { Component } from 'react';
import vacanti from './img/vacanti-logo-big.png';
import storyline from './img/storyline.png';
import canaveral from './img/canaveral.png';
import Image from 'react-graceful-image';

export class Projects extends Component {
    render() {
        return (
            <div className='project-cont'>
                <p className='projects-anchor' id='projects' />
                <h1 className='subheader'>Projects:</h1>
                <div id='proj6' className='proj-cell'>
                    <div className='text-area'>
                        <h3 className='small-header'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://storyline-seven.vercel.app'
                                className='proj-link'
                            >
                                > Storyline (storyline-seven.vercel.app)
                            </a>
                        </h3>
                        <p className='about-text'>
                            A blockchain based writing platform. Readers can come read the full storyline free of cost, and writers can contribute their own additions to the storyline and own their contributions as NFTs. {' '}
                            <a href='https://github.com/storyline-team/storyline'>
                                Here's the github repo.
                            </a>
                        </p>
                        <p className='tech-desc'>
                            Built using Solidity, React, and the Truffle Suite.
                            Testing done with Jest tests. Deployed on the Rinkeby ethereum test network.
                        </p>
                    </div>
                    <Image
                        className='storyline-logo'
                        src={storyline}
                        alt='storyline-logo'
                    />
                </div>
                <div id='proj5' className='proj-cell'>
                    <div className='text-area'>
                        <h3 className='small-header'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://canaveral.tk'
                                className='proj-link'
                            >
                                > Canaveral (canaveral.tk)
                            </a>
                        </h3>
                        <p className='about-text'>
                            An open-source project manager built on a
                            lightning-fast command-line interface. Modify, view,
                            launch, and remove project with ease, from wherever
                            you want. Includes integrated git support, finder
                            support, and vscode support. Multi-platform tested
                            and enabled.{' '}
                            <a href='https://www.youtube.com/watch?v=wL0LG4mU6-Q'>
                                Click Here For Demo!
                            </a>
                        </p>
                        <p className='tech-desc'>
                            Built using the Go programming language. Unit
                            testing done with Go tests. Distributed with
                            Homebrew as well as the Go ecosystem.
                        </p>
                    </div>
                    <Image
                        className='canaveral-logo'
                        src={canaveral}
                        alt='canaveral-logo'
                    />
                </div>
                <div id='proj1' className='proj-cell'>
                    <div className='text-area'>
                        <h3 className='small-header'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://vacanti.herokuapp.com'
                                className='proj-link'
                            >
                                > Vacanti (vacanti.herokuapp.com)
                            </a>
                        </h3>
                        <p className='about-text'>
                            Real-time analytics and information about your
                            favorite coffee shops. Vacanti tells you not only
                            how full a coffee shop is, but what amenities it
                            offers, special promotions, and directions to the
                            shop. Designed and created as a Minimum Viable
                            Product (MVP) for a software engineering for
                            startups course.
                        </p>
                        <p className='tech-desc'>
                            Built using React, Node, Express, and Firebase. Unit
                            testing done with Mocha and Chai. End-to-end testing
                            done with Cypress. Database and user authentication
                            is done with Firebase.
                        </p>
                    </div>
                    <Image
                        className='vacanti-logo'
                        src={vacanti}
                        alt='vacanti-logo'
                    />
                </div>
                <div id='proj3' className='proj-cell'>
                    <div className='text-area'>
                        <h3 className='small-header'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://github.com/jchengjr77/3DGOL'
                                className='proj-link'
                            >
                                > 3D Game of Life (Github)
                            </a>
                        </h3>
                        <p className='about-text'>
                            Following of a hackathon project regarding
                            multiplayer Game Of Life, I created a 3D version of
                            Conway's Game Of Life. This version featured
                            singleplayer and multiplayer modes, as well as rules
                            customizations, evolution of cells in 3D space, and
                            stat tracking.
                        </p>
                        <p className='tech-desc'>
                            This project was built in November of 2018, and is
                            written in Python (tkinter, Panda3D).
                        </p>
                    </div>
                    <iframe
                        width='640px'
                        height='360px'
                        src='https://www.youtube.com/embed/hiVpmihZk9c'
                        id='gol-vid'
                        title='3DGOL'
                    />
                </div>
            </div>
        );
    }
}

export default Projects;
