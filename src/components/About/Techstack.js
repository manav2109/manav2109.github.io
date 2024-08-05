import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
  DiGoogleCloudPlatform,
  DiMysql,
  DiDjango 
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiAmazonaws,
  SiMicrosoftazure,
  SiOracle,
  SiAzurepipelines,
  SiGithubactions,
  SiYaml,
  SiTestinglibrary,
  SiVim,
  SiKalilinux,
  SiVmware,
  SiSpringboot,
  SiFastapi,
  SiFlask
} from "react-icons/si";
import { TbBrandCSharp, TbBrandJavascript  } from "react-icons/tb";
import { BiLogoKubernetes } from "react-icons/bi";
import { BsGitlab } from "react-icons/bs";
import { FaGithub, FaCentos } from "react-icons/fa6";
import { GoWorkflow } from "react-icons/go";
import { FaUbuntu, FaWindows } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCentos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurepipelines />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GoWorkflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYaml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTestinglibrary />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVim />
      </Col>
    </Row>
  );
}

export default Techstack;
