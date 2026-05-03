import { Reveal } from './Reveal';
import { techStack } from '../data/portfolio';

export function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <Reveal as="span" className="s-eyebrow">[ III ·  Compositors' Notes ]</Reveal>
        <Reveal as="h2" className="s-title">
          The <em className="holo">press box</em> &amp; the <em className="cobalt">tools</em>.
        </Reveal>
        <Reveal as="p" className="s-deck">
          Languages, frameworks, clouds, monitors, and the unglamorous chrome that makes a system
          observable.
        </Reveal>

        <Reveal className="stack-grid">
          {techStack.map((cat) => (
            <div key={cat.title} className="stack-block">
              <h4>{cat.title}</h4>
              <div className="chips">
                {cat.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
