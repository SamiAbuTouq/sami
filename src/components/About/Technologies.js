import React from "react";
import { Col, Row } from "react-bootstrap";
import HTMLLogo from "./ICON/4.png";
import CSS from "./ICON/(1).webp";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTMLLogo} alt="HTML" title="HTML" style={{ width: "80%",marginTop:"15px"  }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" title="CSS" style={{ width: "80%",marginTop:"15px"  }} />
      </Col>
   </Row>

    
  );
}

export default Techstack;
