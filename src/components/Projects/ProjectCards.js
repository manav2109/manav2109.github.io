import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Row>
          {/* First Section: Company Logo */}
          <Col xs={4} className="logo-section">
            <div className="logo-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%"  }}>
              <Card.Img
                variant="top"
                src={props.imgPath}
                alt="company-logo"
                className="company-logo"
              />
            </div>
          </Col>

          {/* Second Section: Company Name (Each character on a new line) */}
          <Col xs={1} className="company-name-section" style={{paddingLeft:"0px"}}>
            <div className="company-name-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"}}>
              {props.name.split("").map((char, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: "2.5rem", // Adjust the size as needed
                    fontWeight: "bold",
                    lineHeight: "3.0rem", // Adjust line height to ensure proper spacing
                  }}
                >
                  {char}
                </div>
              ))}
            </div>
          </Col>

          {/* Third Section: Upper Text and Description */}
          <Col xs={7} className="text-description-section">
            <div className="upper-text" style={{ paddingBottom: "5%" }}>
              {/* You can add any upper text content here */}
              <span>{props.title}</span>
            </div>
            <div className="description">
              <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
              </Card.Text>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;