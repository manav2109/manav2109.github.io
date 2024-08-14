import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Full viewport height
            textAlign: "center", // Center text horizontally
            padding: "10px",
          }}
        >
          <Col
            md={12} // Full width to center the content
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center content horizontally
            }}
          >
            <h1 style={{ fontSize: "3em", paddingBottom: "20px", margin: "0" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <div style={{ marginTop: "20px" }}>
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
            }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid-laptop-image"
              style={{ maxWidth: "80%", height: "auto" }} // Adjusted max-width for better fit
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container >
  );
}

export default About;
