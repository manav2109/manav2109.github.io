import { Reveal } from './Reveal';
import { interests, languages } from '../data/portfolio';

export function Life() {
  return (
    <section className="section" id="life">
      <div className="container">
        <Reveal as="span" className="s-eyebrow">[ VI ·  Outside the Office ]</Reveal>
        <Reveal as="h2" className="s-title">
          When the <em className="holo">terminal</em> closes.
        </Reveal>
        <Reveal as="p" className="s-deck">
          A short list. The cue chalks itself.
        </Reveal>

        <Reveal className="life">
          <div className="life-block">
            <h4>● Interests</h4>
            <div className="hobby-list">
              {interests.map((h) => (
                <span key={h.name} className="hobby">
                  {h.name}
                  {h.aside ? (
                    <>
                      {' '}
                      <em>{h.aside}</em>
                    </>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <div className="life-block">
            <h4>◐ Languages</h4>
            <div className="lang-list">
              {languages.map((l) => (
                <div key={l.name} className="lang-row">
                  <span>{l.name}</span>
                  <span className="level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
