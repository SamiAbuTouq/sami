import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import L2 from "../../Assets/Projects/L2.png";
import lcm from "../../Assets/Projects/lcm-and-gcf.png";
import pharmacy from "../../Assets/Projects/pharmacy.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a my projects that I've worked on 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={L2}
              isBlog={false}
              title={<span className="project-title">DART</span>}
              description="This project is a fully functional e-commerce website that allows users to browse, sign up, sign in, add items to their cart, and complete purchases. It is designed to provide a seamless user experience with a focus on simplicity and usability. Built with PHP, MySQL for database management, and HTML/CSS for the front end.

"
              ghLink="https://github.com/SamiAbuTouq/DART-Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmacy}
              isBlog={false}
              title={<span className="project-title">Pharmacy Management System</span>}
              description="The Pharmacy Management System is an Object-Oriented Programming (OOP) project developed in C++ that uses inheritance, encapsulation, and polymorphism to manage pharmacies, medications, and customers"
              ghLink="https://github.com/SamiAbuTouq/Pharmacy-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lcm}
              isBlog={false}
              title={<span className="project-title">Assembly-Project</span>}
              description="This project is a Greatest Common Divisor (GCD) and Least Common Multiple (LCM) calculator implemented in x86 assembly language. It features a user-friendly console interface that allows users to input two numbers and computes their GCD and LCM"
              ghLink="https://github.com/SamiAbuTouq/Assembly-Project"
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
