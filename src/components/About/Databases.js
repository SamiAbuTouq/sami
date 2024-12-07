import React from "react";
import { Col, Row } from "react-bootstrap";
import MySQLLogo from "./ICON/(2).webp";
import SQLiteLogo from "./ICON/s.png";
import SQLLogo from "./ICON/(7).png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQLLogo} alt="MySQL" title="MySQL" style={{ width: "80%",marginTop:"12px"  }} />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLiteLogo} alt="SQLite" title="SQLite" style={{ width: "80%",marginTop:"50px"  }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLLogo} alt="SQL" title="SQL" style={{  width: "80%",marginTop:"50px"  }} />
      </Col>
     
    </Row>

    
  );
}

export default Techstack;
