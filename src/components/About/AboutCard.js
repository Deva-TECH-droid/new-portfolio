import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Devansh Upadhyay</span>{" "}
            from <span className="purple">UttarPradhesh, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">TRIVANI ENTERPRISES</span>.
            <br />I hold an Integrated B.TECH (BE) in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">IIT barabanki</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> MUSIC 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating and Making of Food😋
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SONAGRA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
