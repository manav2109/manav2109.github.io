import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bosler from "../../Assets/Projects/bosler.svg";
import hm from "../../Assets/Projects/hm.png";
import st from "../../Assets/Projects/skythread.png";
import ab from "../../Assets/Projects/airbus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} className="project-card">
            <ProjectCard
              imgPath={bosler}
              title="Java Engineer at Bosler, France"
              name="BOSLER"
              description="As a Java Software Engineer and Linux Server Operator at Bosler, I am responsible for developing and maintaining software applications using Java, JavaScript, Python, Hadoop, Spark, PostgreSQL DB and other relevant technologies. I collaborate with cross-functional teams to gather requirements, analyze user needs, and implement effective software solutions. Additionally, I participate in testing and debugging activities to ensure the functionality and performance of the applications."
            />
          </Col>
          <Col xs={12} className="project-card">
            <ProjectCard
              imgPath={hm}
              name="H&M"
              title="Python Engineer and GCP DevOps at H&M, Sweden"
              description="Platform at H&M, where I am involved in the design, development, and maintenance of software applications. I utilize my skills in Python, SQL, CI/CD and Proxy management to create innovative and efficient solutions. I collaborate with cross-functional teams to analyze requirements, design solutions, and implement software solutions. Additionally, I participate in testing and debugging activities to ensure the functionality and performance of the applications."
            />
          </Col>
          <Col xs={12} className="project-card">
            <ProjectCard
              imgPath={st}
              name="SKYTHREAD"
              title="SkyThread Airbus, California"
              description="As a C# Software Engineer and Azure CI/CD manager at SkyThread Airbus, I am involved in the development and maintenance of software applications. I work with a variety of technologies including C# and Azure to create efficient and reliable solutions. I collaborate with cross-functional teams to gather requirements, analyze user needs, and implement effective software solutions. Additionally, I participate in code reviews, testing, and debugging activities to ensure the quality and functionality of the software."
            />
          </Col>
          <Col xs={12} className="project-card">
            <ProjectCard
              imgPath={ab}
              name="AIRBUS"
              title="Airbus, UK"
              description="Wrote a NLP Project to determine the parts details based on removal or addition from the provided documentation using Meta-AI Model and Pytorch. Leading to a massive project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;