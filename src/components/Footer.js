import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillWhatsApp,
  AiFillPhone,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Manav Rathi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/manav2109"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/manavdex21/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mxnxv_rxthx"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://wa.me/918708200465"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+919518632954"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:manavdex21@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillMail />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
