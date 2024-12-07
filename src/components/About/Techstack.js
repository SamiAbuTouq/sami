import React from "react";
import { Col, Row } from "react-bootstrap";
import CLogo from "./ICON/(12).png";
import CplusLogo from "./ICON/(1).png";
import DartLogo from "./ICON/(2).png";
import JQueryLogo from "./ICON/(3).png";
import JavaScriptLogo from "./ICON/(3).webp";
import HTMLLogo from "./ICON/4.png";
import AndroidStudioLogo from "./ICON/4.png";
import PHPLogo from "./ICON/5.png";
import VisualStudioLogo from "./ICON/(8).png";
import CLionLogo from "./ICON/(13).png";
import CSharpLogo from "./ICON/(14).png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CLogo} alt="C" title="C" style={{ width: "75%",marginTop:"13px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CplusLogo} alt="C++" title="C++" style={{  width: "80%",marginTop:"15px"  }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSharpLogo} alt="C#" title="C#" style={{  width: "80%",marginTop:"15px"  }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={JavaScriptLogo} alt="JavaScript" title="JavaScript" style={{ width: "80%",marginTop:"15px"  }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={JQueryLogo} alt="jQuery" title="jQuery" style={{ width: "80%",marginTop:"15px"  }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={DartLogo} alt="Dart" title="Dart" style={{ width: "70%",marginTop:"12px",marginBottom:"12px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PHPLogo} alt="PHP" title="PHP" style={{ width: "80%",marginTop:"40px"  }} />
      </Col>
    </Row>

    
  );
}

export default Techstack;
