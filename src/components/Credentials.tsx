import { Reveal } from './Reveal';
import { certifications, industries } from '../data/portfolio';

export function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="container">
        <Reveal as="span" className="s-eyebrow">[ V ·  Filed Papers ]</Reveal>
        <Reveal as="h2" className="s-title">
          Certified, &amp; <em className="cobalt">on the record</em>.
        </Reveal>
        <Reveal as="p" className="s-deck">
          Accreditations &amp; the industries where these credentials have been put to work.
        </Reveal>

        <Reveal className="creds">
          <div className="creds-block">
            <h4>★ Certifications &amp; Training</h4>
            <div className="cert-list">
              {certifications.map((c) => (
                <span key={c} className="cert-pill">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="creds-block">
            <h4>◆ Industries Served</h4>
            <div className="ind-list">
              {industries.map((i) => (
                <span key={i} className="ind-pill">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
