import React from "react";
import { Card } from "react-bootstrap";

function Skills() {
  return (
    <div className="skills" id="skills">
      <Card className="skills_card">
        <Card.Body className="skills_cardBody">
          <Card.Text className="skills_cardText">
            Front End: HTML, CSS, JavaScript, TypeScript, React, React Native,
            Redux, Bootstrap, React Hooks, jQuery, Reactstrap, HTTP Back End:
            Node.js, PostgreSQL, NoSQL, Express, AWS DynamoDB, AWS SDK, REST,
            Serverless, Java, Spring Boot Additional: Unit Testing, Data
            Structures, Github, GitLabs, AWS CodePipeline, AWS Cognito, Jest,
            Enzyme, React-Testing-Library, Mocha, Chai, Jest-Expo
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Skills;