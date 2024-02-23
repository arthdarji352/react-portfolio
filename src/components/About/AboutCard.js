import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arth Darji </span>
            from <span className="purple"> Godhra,Gujarat,India.</span>
            <br />
            As a Full Stack Web Developer, I have a passion for developing
            innovative, dynamic websites that provide top-notch user
            experiences. I've worked with a number of different technologies and
            have some experience with both front-end and back-end programming. I
            am skilled in creating responsive, interactive user interfaces
            utilising contemporary Javascript frameworks like React and NextJS.
            I also have experience with server-side technologies like Node.js,
            Express.js, and MongoDB, which enables me to create scalable backend
            systems and robust APIs. I'm constantly looking for new
            possibilities and challenges to improve my abilities.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
