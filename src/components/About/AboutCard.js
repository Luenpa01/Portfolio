import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luis Enrique Parada </span>
            also known by <span className="purple"> Enrique Ferris </span> and i'm
            based in <span className="purple"> Medellin, Colombia.</span>
            <br />
            I am currently employed as a Cloud Engineer at NEORIS, and share mi knoledge about Rust and AI 
            <br />
            I have completed BSc in Aeronautical Engineering at Pontifical Bolivarian University, and currently studying BSc in Data Science Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Aircraft Models
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with CTF's
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The secret of change is to focus all of your energy, not on fighting the old, but on building the new"{" "}
          </p>
          <footer className="blockquote-footer">Socrates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
