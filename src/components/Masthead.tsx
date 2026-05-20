import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'about',       label: 'ABOUT'     },
  { id: 'experience',  label: 'CAREER'    },
  { id: 'stack',       label: 'STACK'     },
  { id: 'projects',    label: 'WORK'      },
  { id: 'credentials', label: 'CERTS'     },
  { id: 'contact',     label: 'HIRE ME ↗', cta: true },
] as const;

export function Masthead() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close menu and smoothly scroll to target section
  const closeAndScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    // Wait for the menu slide-out transition (320ms) before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 320);
  };

  return (
    <>
      <header className="masthead">
        <div className="masthead-inner">
          <div className="masthead-title">
            Manav <span className="holo-text">Rathi</span>
          </div>

          {/* Desktop navigation */}
          <nav className="masthead-nav" aria-label="Main navigation">
            <a href="#about">ABOUT</a>
            <a href="#experience">CAREER</a>
            <a href="#stack">STACK</a>
            <a href="#projects">WORK</a>
            <a href="#contact" className="cta">HIRE ME ↗</a>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen navigation overlay */}
      <div
        id="mobile-nav"
        className={`mobile-menu${open ? ' open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal={open ? true : undefined}
      >
        <nav aria-label="Site navigation">
          {NAV_ITEMS.map(({ id, label, cta }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cta ? 'mobile-cta' : undefined}
              onClick={closeAndScroll(id)}
              tabIndex={open ? 0 : -1}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
