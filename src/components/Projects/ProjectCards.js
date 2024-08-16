import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function ProjectCards(props) {
  const [isXs, setIsXs] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsXs(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="project-card-container">
      <Card className="project-card-view" style={{ width: "100%" }}>
        <Card.Body>
          <Row>
            {/* First Section: Company Logo */}
            <Col
              xs={{ span: 12, order: 1 }}
              sm={3}
              className="logo-section"
            >
              <div
                className="logo-wrapper"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={props.imgPath}
                  alt="company-logo"
                  className="company-logo"
                  style={{
                    width: "65%",
                    minWidth: "60%",
                  }}
                />
              </div>
            </Col>

            {/* Second Section: Company Name (Each character on a new line) */}
            <Col
              xs={{ span: 12, order: 2 }}
              sm={1}
              className="company-name-section"
              style={{
                paddingLeft: "0px",
                paddingRight: "0px",
                marginLeft: "-10px",
              }}
            >
              <div
                className="company-name-wrapper"
                style={{
                  display: "flex",
                  flexDirection: isXs ? "row" : "column", // Adjust based on screen size
                  alignContent: "space-between",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                {props.name.split("").map((char, index) => (
                  <div
                    key={index}
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      lineHeight: "3.0rem",
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>
            </Col>

            {/* Third Section: Upper Text and Description */}
            <Col
              xs={{ span: 12, order: 3 }}
              sm={8}
              className="text-description-section"
            >
              <div
                className="upper-text"
                style={{ paddingBottom: "5%" }}
              >
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
