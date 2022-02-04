import React from "react";
import { Card } from "react-bootstrap";
import "../styles/about.scss";

function About() {
  return (
    <div className="about" id="about">
      <Card className="about_card">
        <Card.Body className="about_cardBody">
          <Card.Text className="about_cardText">
            I'm a full-stack web developer located in Maryland, USA. I enjoy
            learning new technologies and am looking forward to expanding my
            horizons with design and development. I love creating clean and
            appealing websites with great user experience. If you're looking to
            hire a new developer or interested in exchanging ideas please don't
            hesitate to reach out. I would love to work with others in building
            amazing websites and applications.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
