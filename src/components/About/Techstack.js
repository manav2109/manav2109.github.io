import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiDocker,
  DiGoogleCloudPlatform,
  DiMysql,
  DiDjango 
} from "react-icons/di";
import {
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
  const techs = [
    { icon: <SiKalilinux />, name: "Kali Linux" },
    { icon: <FaUbuntu />, name: "Ubuntu" },
    { icon: <FaCentos />, name: "CentOS" },
    { icon: <FaWindows />, name: "Windows" },
    { icon: <SiVmware />, name: "VMware" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <TbBrandJavascript />, name: "JavaScript" },
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <DiDjango />, name: "Django" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiGoogleCloudPlatform />, name: "Google Cloud Platform" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <DiDocker />, name: "Docker" },
    { icon: <BiLogoKubernetes />, name: "Kubernetes" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <BsGitlab />, name: "GitLab" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiAzurepipelines />, name: "Azure Pipelines" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <GoWorkflow />, name: "Workflow" },
    { icon: <SiYaml />, name: "YAML" },
    { icon: <SiTestinglibrary />, name: "Testing Library" },
    { icon: <SiVim />, name: "Vim" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
