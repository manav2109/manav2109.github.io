import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'about',  label: 'ABOUT'  },
  { id: 'career', label: 'CAREER' },
  { id: 'stack',  label: 'STACK'  },
  { id: 'work',   label: 'WORK'   },
  { id: 'certs',  label: 'CERTS'  },
] as const;

type NavId = typeof NAV_ITEMS[number]['id'];

interface Props {
  activePage?: NavId | 'home' | 'courses';
}

export function Masthead({ activePage = 'home' }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="masthead">
        <div className="masthead-inner">

          {/* Left — brand */}
          <div className="masthead-title">
            <Link to="/" onClick={close}>Manav <span className="holo-text">Rathi</span></Link>
          </div>

          {/* Centre — nav links */}
          <nav className="masthead-nav" aria-label="Main navigation">
            {NAV_ITEMS.map(({ id, label }) => (
              <Link
                key={id}
                to={`/${id}`}
                className={activePage === id ? 'nav-active' : ''}
              >
                {label}
              </Link>
            ))}
            <Link to="/courses" className={activePage === 'courses' ? 'nav-active' : ''}>
              COURSES
            </Link>
          </nav>

          {/* Right — CTA + hamburger */}
          <div className="masthead-right">
            <Link to="/about#contact" className="masthead-cta">HIRE ME ↗</Link>
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
          {NAV_ITEMS.map(({ id, label }) => (
            <Link key={id} to={`/${id}`} tabIndex={open ? 0 : -1} onClick={close}>
              {label}
            </Link>
          ))}
          <Link to="/courses" tabIndex={open ? 0 : -1} onClick={close}>COURSES</Link>
          <Link to="/about#contact" className="mobile-cta" tabIndex={open ? 0 : -1} onClick={close}>
            HIRE ME ↗
          </Link>
        </nav>
      </div>
    </>
  );
}
