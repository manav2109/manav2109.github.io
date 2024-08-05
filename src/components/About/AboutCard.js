import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manav Rathi </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently employed as a Java software engineer at Bosler, France.
            <br />
            I am a self learner from young age and learned and implemeneted my learning in Various Projects
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Playing Snooker & Billiards
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing Story games
            </li>
            <li className="about-activity">
              <ImPointRight />  Solo - Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manav Rathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
