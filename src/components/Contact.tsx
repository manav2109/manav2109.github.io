import { Reveal } from './Reveal';
import { contact } from '../data/portfolio';
import { ContactIcon } from '../icons';
import { useReveal } from '../hooks/useReveal';

interface RowProps {
  href: string;
  icon: (typeof contact)[number]['icon'];
  lbl: string;
  val: string;
  delay: number;
}

function ContactRow({ href, icon, lbl, val, delay }: RowProps) {
  const [ref, inView] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  return (
    <a
      ref={ref}
      className={`clink reveal spring${inView ? ' in' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ContactIcon name={icon} />
      <div className="lab">{lbl}</div>
      <div className="val">{val}</div>
    </a>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal as="span" className="s-eyebrow">[ VII ·  Letters ]</Reveal>
        <Reveal as="h2" className="s-title">
          Pick a <em className="holo">channel</em>.
        </Reveal>
        <Reveal as="p" className="s-deck">
          Email is fastest. WhatsApp works. Pigeon — give me a few weeks.
        </Reveal>

        <div className="cgrid" id="cgrid">
          {contact.map((c, i) => (
            <ContactRow
              key={c.lbl}
              href={c.href}
              icon={c.icon}
              lbl={c.lbl}
              val={c.val}
              delay={i * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
