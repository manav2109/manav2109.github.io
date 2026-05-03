import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const SIDE_ROWS: Array<[string, string]> = [
  ['Currently', 'SDET-II · Affle (YouAppi)'],
  ['Based in', 'Delhi · India'],
  ['Worked for', 'H&M · Airbus · Bosler · Affle'],
  ['Clouds', 'GCP · AWS · Azure · Heroku'],
  ['Writes', 'Python · Java · C# · JS · Shell'],
  ['Frameworks', 'FastAPI · Spring Boot · Flask · React · Next.js'],
  ['Ships to', 'EKS · GKE · OpenShift · On-prem K8s'],
  ['Watches with', 'ELK · Prom · Grafana · Splunk'],
  ['Tests with', 'PyTest · SpecFlow · jUnit · nUnit'],
  ['Speaks', 'English · Hindi (fluent)'],
  ['Plays', 'Snooker (positional) · Hikes · Runs'],
];

const SIDE_CHIPS = [
  'Terraform', 'Helm', 'Kubernetes',
  'Ansible', 'Jenkins', 'ArgoCD',
  'FastAPI', 'Spring Boot', 'RabbitMQ',
  'PostgreSQL', 'Cassandra', 'Snowflake',
  'LLaMA', 'unSloth', 'Hyperledger',
];

export function About() {
  const [eyebrowRef, eyebrowIn] = useReveal<HTMLSpanElement>();
  const [titleRef, titleIn] = useReveal<HTMLHeadingElement>();
  const [deckRef, deckIn] = useReveal<HTMLParagraphElement>();
  const [textRef, textIn] = useReveal<HTMLDivElement>();
  const [sideRef, sideIn] = useReveal<HTMLElement>();

  useEffect(() => {
    if (sideIn) {
      window.dispatchEvent(new Event('confetti-burst'));
    }
  }, [sideIn]);

  return (
    <section className="section" id="about">
      <div className="container">
        <span ref={eyebrowRef} className={`s-eyebrow reveal${eyebrowIn ? ' in' : ''}`}>
          [ I ·  Profile ]
        </span>
        <h2 ref={titleRef} className={`s-title reveal${titleIn ? ' in' : ''}`}>
          A brief <em className="holo">introduction</em>, set in <em className="stamp">SERIF</em>.
        </h2>
        <p ref={deckRef} className={`s-deck reveal${deckIn ? ' in' : ''}`}>
          Results-driven Software Engineer · 5+ years across cloud-native infrastructure, DevOps
          automation, and backend engineering — for global enterprises in four countries.
        </p>

        <div className="about">
          <div ref={textRef} className={`about-text reveal${textIn ? ' in' : ''}`}>
            <p>
              I fell in love with programming and never stopped building things that actually{' '}
              <strong>work in production</strong>. Currently <strong>SDET-II at Affle</strong> on the{' '}
              <strong>YouAppi</strong> and <strong>Jampp</strong> platforms — driving the
              observability initiative, integrating <strong>APM tooling</strong> for logs &amp;
              monitoring, automating production-risk mitigation in Python and Java, and right-sizing
              cloud spend across an ad-tech engine that processes{' '}
              <strong>billions of requests a day</strong>.
            </p>
            <p>
              Across five years and four flags, I've shipped enterprise software for{' '}
              <strong>H&amp;M (Sweden)</strong>, <strong>Airbus (USA)</strong>,{' '}
              <strong>Bosler (France)</strong>, and now <strong>Affle (India)</strong>. Java +
              Hadoop + Spark big-data pipelines that cut report time from{' '}
              <strong>10 min to under 2 min (80% faster)</strong>; Python automation on GCP at H&amp;M
              with <strong>2 years of hands-on Centric8 PLM</strong>; C# distributed services on{' '}
              <strong>Hyperledger Fabric</strong> blockchain for Airbus, with Azure DevOps pipelines
              that <strong>cut deployment time 50%</strong>.
            </p>
            <p>
              My passion is <strong>observable by design</strong> — systems where you answer "is it
              working?" with data, not guesses. I architect <strong>Kubernetes</strong>, write infra
              in <strong>Terraform</strong>, design <strong>CI/CD</strong> across GitHub Actions /
              Bitbucket / Azure / Jenkins, and pair a deep monitoring stack —{' '}
              <strong>ELK</strong>, <strong>Prometheus</strong>, <strong>Grafana</strong>,{' '}
              <strong>Splunk</strong>, <strong>APM</strong> — with disciplined testing in{' '}
              <strong>PyTest</strong>, <strong>SpecFlow</strong>, and <strong>jUnit/nUnit</strong>.
              Comfortable across <strong>GCP, AWS, and Azure</strong> — a fluent multi-cloud
              engineer who prefers his pipelines idempotent and his systems boring.
            </p>
            <p>
              On the side I've trained a <strong>LLaMA 3B</strong> model with unSloth + Ollama for
              email triage, built a <strong>multi-cloud Python CLI</strong> spanning
              GCP/AWS/Azure/Heroku/K8s, automated <strong>full GKE &amp; EKS</strong> infrastructure
              in Terraform, and architected a{' '}
              <strong>fleet-managed ELK stack with auto-renewing Let's Encrypt SSL</strong>. Based
              in Delhi.
            </p>
          </div>
          <aside
            ref={sideRef}
            className={`about-side reveal spring${sideIn ? ' in' : ''}`}
          >
            <h4>At a glance</h4>
            <ul>
              {SIDE_ROWS.map(([k, v]) => (
                <li key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </li>
              ))}
            </ul>
            <div className="stack-strip">
              {SIDE_CHIPS.map((c) => (
                <span key={c} className="stack-chip">
                  {c}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
