import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroStats } from '../data/portfolio';
import { HoloPortrait } from './HoloPortrait';
import { StatCard } from './StatCard';
import { track } from '../lib/analytics';

export function Hero() {
  // Mirror the 700ms delay from the original page so the hero "rise" plays first.
  const [statsArmed, setStatsArmed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStatsArmed(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div>
          <span className="hero-stamp">
            5 YRS · 4 FLAGS · 12 PROJECTS · OPEN TO OFFERS
          </span>
          <div className="hero-eyebrow">
            Software Engineer · Cloud, DevOps &amp; Observability.
          </div>
          <h1 className="hero-name">
            <span className="ln"><span>Manav</span></span>
            <span className="ln"><span><em className="holo">Rathi.</em></span></span>
          </h1>
          <svg className="underline-svg" viewBox="0 0 600 30" preserveAspectRatio="none">
            <path d="M5,18 C 100,2 200,28 320,12 C 460,-4 540,22 595,10" />
          </svg>
          <p className="hero-tag">
            <strong>Software Engineer · Cloud &amp; DevOps</strong>, currently{' '}
            <span className="accent">SDET-II at Affle</span> on the{' '}
            <mark>YouAppi</mark> &amp; <mark>Jampp</mark> platforms — designing observability,
            integrating <strong>APM</strong>, automating production-risk mitigation, and shipping
            QA platforms onto <strong>AWS EKS</strong> for systems that handle{' '}
            <em>billions of ad requests a day</em>. Five years across{' '}
            <strong>H&amp;M (Sweden)</strong>, <strong>Airbus (USA)</strong>,{' '}
            <strong>Bosler (France)</strong>, and India.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/work"
               onClick={() => track('cta_click', { button: 'see_work' })}>
              SEE THE WORK →
            </Link>
            <Link className="btn secondary" to="/about#contact"
               onClick={() => track('cta_click', { button: 'hire_me' })}>
              GET IN TOUCH →
            </Link>
            <a className="btn" href="/assets/ManavRathi_Resume.pdf"
               download="ManavRathi_Resume.pdf"
               onClick={() => track('cta_click', { button: 'download_cv' })}>
              DOWNLOAD CV ↓
            </a>
          </div>
        </div>

        <div className="portrait-frame">
          <HoloPortrait />
          <div className="corner tl" />
          <div className="corner tr" />
          <div className="corner bl" />
          <div className="corner br" />
          <div className="mono">M</div>
          <div className="badge">
            SDET-II
            <br />
            SINCE '25
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {heroStats.map((s) => (
          <StatCard
            key={s.label}
            target={s.target}
            suffix={s.suffix}
            label={s.label}
            immediate={statsArmed}
          />
        ))}
      </div>
    </section>
  );
}
