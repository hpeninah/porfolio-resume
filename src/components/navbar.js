import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={require("../assets/2.png")}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="my_logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Navigation;
