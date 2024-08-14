import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="project-card-container">
      <Card className="project-card-view" style={{ width: '100%' }}>
        <Card.Body>
          <Row>
            {/* First Section: Company Logo */}
            <Col xs={5} sm={3} className="logo-section">
              <div className="logo-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={props.imgPath}
                  alt="company-logo"
                  className="company-logo"
                  style={{
                    width:"65%",
                    minWidth:"60%",
                  }}
                />
              </div>
            </Col>
            {/* Second Section: Company Name (Each character on a new line) */}
            <Col 
              xs={1} 
              sm={1} 
              className="company-name-section" 
              style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "-10px" }} // Reduced the margin between sections
            >
              <div className="company-name-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "centre",alignContent:"space-between",flexWrap:"wrap", justifyContent: "center", height: "100%" }}>
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
            <Col xs={6} sm={8} className="text-description-section">
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
    </div>
  );
}

export default ProjectCards;
