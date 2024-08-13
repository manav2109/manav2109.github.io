import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const tools = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <FcLinux />, name: "Linux" },
    { icon: <FaWindows />, name: "Windows" },
    { icon: <SiPycharm />, name: "PyCharm" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    { icon: <SiSublimetext />, name: "Sublime Text" },
    { icon: <GiJupiter />, name: "Jupyter" },
    { icon: <DiEclipse />, name: "Eclipse" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiWebstorm />, name: "WebStorm" },
    { icon: <SiNotepadplusplus />, name: "Notepad++" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <PiMicrosoftTeamsLogoLight />, name: "Microsoft Teams" },
    { icon: <SiGooglechat />, name: "Google Chat" },
    { icon: <SiRabbitmq />, name: "RabbitMQ" },
    { icon: <SiApachekafka />, name: "Apache Kafka" },
    { icon: <SiRedis />, name: "Redis" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
