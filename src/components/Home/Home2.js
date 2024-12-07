import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.png";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a third-year
              <i>
                <b className="purple"> Computer Science </b>
              </i>
              student at Princess Sumaya University for Technology. My passion
              for technology started during high school when I became intrigued
              by how computers work and the limitless possibilities they offer.
              <br />
              <br />
              I particularly enjoy exploring
              <i>
                <b className="purple"> algorithms </b>
              </i>
              and their fascinating applications, as well as experimenting with
              different
              <i>
                <b className="purple"> programming languages. </b>
              </i>
              I also love
              <i>
                <b className="purple"> building things </b>
              </i>
              like creating sleek and functional web applications.
              <br />
              <br />
              University has been a place where I’ve worked hard to turn my
              ideas into reality, building projects that reflect my curiosity
              and creativity. Each step I take is fueled by my love for
              problem-solving and innovation in the tech world.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" id="connect-me-section">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SamiAbuTouq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sami-abu-touq/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                    <a
                      href="mailto:samiabutouq5@gmail.com"
                      className="icon-colour home-social-icons"
                    >
                      <SiGmail />
                    </a>
                  </li>
                <li className="social-icons">
                <a
                href="tel:+962775083681"
                className="icon-colour home-social-icons"
              >
              <FaPhoneAlt />

              </a>

              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
