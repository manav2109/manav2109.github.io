import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SCROLL_ITEMS = [
  { id: 'about',       label: 'ABOUT'  },
  { id: 'experience',  label: 'CAREER' },
  { id: 'stack',       label: 'STACK'  },
  { id: 'projects',    label: 'WORK'   },
  { id: 'credentials', label: 'CERTS'  },
] as const;

interface Props {
  activePage?: 'home' | 'courses';
}

export function Masthead({ activePage = 'home' }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    if (activePage !== 'home') {
      window.location.href = `/#${id}`;
      return;
    }
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 320);
  };

  return (
    <>
      <header className="masthead">
        <div className="masthead-inner">

          {/* Left — brand */}
          <div className="masthead-title">
            <Link to="/">Manav <span className="holo-text">Rathi</span></Link>
          </div>

          {/* Centre — nav links */}
          <nav className="masthead-nav" aria-label="Main navigation">
            {SCROLL_ITEMS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={scrollTo(id)}>{label}</a>
            ))}
            <Link
              to="/courses"
              className={activePage === 'courses' ? 'nav-active' : ''}
            >
              COURSES
            </Link>
          </nav>

          {/* Right — CTA + hamburger */}
          <div className="masthead-right">
            <a
              href="#contact"
              className="masthead-cta"
              onClick={scrollTo('contact')}
            >
              HIRE ME ↗
            </a>
            <button
              className={`hamburger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-nav"
        className={`mobile-menu${open ? ' open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal={open ? 'true' : undefined}
      >
        <nav aria-label="Site navigation">
          {SCROLL_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={scrollTo(id)} tabIndex={open ? 0 : -1}>
              {label}
            </a>
          ))}
          <Link to="/courses" tabIndex={open ? 0 : -1}>COURSES</Link>
          <a href="#contact" className="mobile-cta" onClick={scrollTo('contact')} tabIndex={open ? 0 : -1}>
            HIRE ME ↗
          </a>
        </nav>
      </div>
    </>
  );
}
