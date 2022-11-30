import "./about.scss";
import me from './images/me.png';
import { useEffect } from 'react';

export default function About() {

  return (
    <div className="about" id="about">
      <h1>Full Stack Web Developer</h1>

      <a href="#about" class="fa-regular"><i class="fa-regular fa-id-badge"></i></a>
      <a href="#work" class="fa-solid"><i class="fa-solid fa-copy"></i></a>
      <a href="#contact" class="fa-solid"><i class="fa-solid fa-mobile-screen-button"></i></a>
      <a href="#resume" class="fa-solid"><i class="fa-regular fa-file"></i></a>

      <div className="row">
        <div className="imgContainer">
          <h1>Ryanne Bennett</h1>
          <div className="meDiv">
            <img className="me" src={me} alt="" />
          </div>
          <div className="topDiv"></div>
          <div className="bottomDiv"></div>
          <div className="extend"></div>
        </div>

        <div className="paragraph">
          <h2 className="name">Ryanne Bennett</h2>
          <h2 className="aboutMe">About Me</h2>
          <p>
            From the world of News Broadcasting production
            where I developed my passion for learning new technology,
            because of the fast pace environment and robotic technology
            slowly taking over live broadcasts.  Whether it’s robotic cameras or web development I’m always up for the challenge to be creative and learn a new skill.
          </p>
          <p>
            Coding has been a huge part of my day to day for years now,
            and I have always wondered what more I can do with it.
            I am ready to change up my career path and challenge myself in new ways!
          </p>
        </div>
      </div>
    </div>
  )
};