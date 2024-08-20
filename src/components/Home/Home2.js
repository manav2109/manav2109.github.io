import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import "./Home.css"
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Heading Section */}
        <Row className="justify-content-center" style={{ marginTop:"-40px",marginBottom: "40px" }}>
          <Col md={12} className="text-center">
            <h1 style={{ fontSize: "2.6em", color: "white" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
        </Row>

        {/* Main Content Section */}
        <Row>
          <Col
            md={7} 
            className="d-flex flex-column justify-content-center responsive-margin"
            style={{marginTop:"400px"}}
          >
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <br />
              <br />Programming languages:
              <i>
                <b className="purple"> Java, Python, JavaScript, C# </b>
              </i>
              <br />Databases:
              <i>
                <b className="purple">
                  PostgreSQL, MySQL, MongoDB, AlloyDB, FireStore, BigQuery
                </b>
              </i>
              <br /> Cloud Platforms:
              <i>
                <b className="purple">
                  Google Cloud Platform, Microsoft Azure, Amazon Web Services
                </b>
              </i>
              <br /> Operating Systems:
              <i>
                <b className="purple">
                  Linux, Windows, VMWare Machine Environments (CentOS, Kali,
                  Ubuntu)
                </b>
              </i>
              <br /> CI/CD & DevOps:
              <i>
                <b className="purple">
                  Docker, Kubernetes, Terraform, Helm, Github, Gitlab, Gitbash,
                  Github Actions, YAML, Workflow
                </b>
              </i>
              <br /> Automation Testing:
              <i>
                <b className="purple"> Gherkin, Cucumber, Pytest </b>
              </i>
              <br /> Documentation Using:
              <i>
                <b className="purple">
                  Confluence, Markdown Files, Powerpoint, Word Documentation
                </b>
              </i>
              <br /> Text Editor & IDE:
              <i>
                <b className="purple">
                  Notepad++, Vim, PyCharm, Visual Studio, Visual Studio Code,
                  IntelliJ, Sublime, Android Studio, Eclipse, Jupiter, Webstorm
                </b>
              </i>
              <br /> Queue Management:
              <i>
                <b className="purple"> Apache Kafka, RabbitMQ </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Solutions for Scalability of Big Platforms with millions and
                  billions of users
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Development Improvement.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col
            md={5} 
            className="d-flex align-items-center justify-content-center"
            style={{ paddingLeft: "50px", marginTop: "80px" }} // Adjusted padding and added margin
          >
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxWidth: "85%", height: "auto" }} // Adjusted max-width and margin for better fit
            />
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row>
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manav2109"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manavdex21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mxnxv_rxthx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/918708200465"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+919518632954"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons" style={{ margin: "10px" }}>
                <a
                  href="mailto:manavdex21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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
