import { Reveal } from './Reveal';
import { career } from '../data/portfolio';
import type { CareerRow, SubRole } from '../types';

function TimelineRow({ row }: { row: CareerRow }) {
  return (
    <article className="tline-row">
      <div className="tline-when">
        {row.range}
        <small>{row.location}</small>
      </div>
      <div className="tline-card">
        <span className="role-tag">{row.roleTag}</span>
        <h3>{row.company}</h3>
        <p className="place">
          <em>{row.blurb}</em>
        </p>
        <ul>
          {row.bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
          ))}
        </ul>
        {row.subRoles && row.subRoles.length > 0 && (
          <div className="sub-roles">
            {row.subRoles.map((sub: SubRole) => (
              <div key={sub.name} className="sub-role">
                <h4 className={sub.variant === 'pink' ? 'pink' : ''}>
                  {sub.name}
                </h4>
                <p
                  style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: sub.body }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Timeline() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal as="span" className="s-eyebrow">[ II ·  Dispatch ]</Reveal>
        <Reveal as="h2" className="s-title">
          Five years, <em className="cobalt">four flags</em>, in <em className="stamp">CHRONOLOGY</em>.
        </Reveal>
        <Reveal as="p" className="s-deck">
          From a C# blockchain shop in California to ad-tech ranking billions of impressions in
          Delhi — by way of Stockholm and Paris.
        </Reveal>

        <Reveal className="timeline">
          {career.map((row) => (
            <TimelineRow key={row.company} row={row} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
