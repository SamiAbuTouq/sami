import React from "react";
import { Col, Row } from "react-bootstrap";
import AndroidStudioLogo from "./ICON/(4).webp";
import VisualStudioLogo from "./ICON/(8).png";
import VSCodeLogo from "./ICON/9.webp";
import CLionLogo from "./ICON/(13).png";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <img src={VSCodeLogo} alt="VS Code " title="VS Code " style={{ width: "73%",marginTop:"15px" }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <img src={VisualStudioLogo} alt="Visual Studio" title="Visual Studio" style={{  width: "80%",marginTop:"11px"  }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <img src={AndroidStudioLogo} alt="Android Studio" title="Android Studio" style={{  width: "80%",marginTop:"11px"  }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <img src={CLionLogo} alt="CLion" title="CLion" style={{ width: "80%",marginTop:"11px"  }} />
    </Col>
    
  </Row>
  );
}

export default Toolstack;
