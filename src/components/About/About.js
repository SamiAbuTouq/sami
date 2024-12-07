import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Technologies from "./Technologies";
import Database from "./Databases";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        <i>  Programming Languages </i><strong className="purple"> </strong>
        </h1>

        <Techstack />
        <h1 className="project-heading">
        <i>  Databases</i><strong className="purple"> </strong>
        </h1>
        <Database />

        <h1 className="project-heading">
          <i>Technologies</i>
          <strong className="purple"></strong> 
        </h1>
        <Technologies/>
        
        <h1 className="project-heading">
          <i>Tools</i>
          <strong className="purple"></strong> 
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
