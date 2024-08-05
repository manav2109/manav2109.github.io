import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPycharm,
  SiIntellijidea,
  SiSublimetext,
  SiGooglechat,
  SiAndroidstudio,
  SiWebstorm,
  SiNotepadplusplus,
  SiRabbitmq,
  SiApachekafka,
  SiRedis
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaWindows } from "react-icons/fa6";
import { GiJupiter } from "react-icons/gi";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { DiEclipse } from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiJupiter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiMicrosoftTeamsLogoLight />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
    </Row>
  );
}

export default Toolstack;
