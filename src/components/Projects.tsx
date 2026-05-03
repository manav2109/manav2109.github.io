import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { projects } from '../data/portfolio';
import { useCountUp } from '../hooks/useCountUp';
import { useReveal } from '../hooks/useReveal';
import type { Project, MetricChip } from '../types';

function ProjectMetric({ metric, start }: { metric: MetricChip; start: boolean }) {
  const text = useCountUp({ target: metric.value, suffix: metric.suffix ?? '', start });
  return (
    <div className="pmetric">
      <div className="num">{text}</div>
      <div className="lbl">{metric.label}</div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [ref, inView] = useReveal<HTMLElement>({ threshold: 0.18 });
  return (
    <article ref={ref} className={`pcard${inView ? ' in' : ''}`}>
      <div className="head">
        <div className="logo">{project.logo}</div>
        <div className="name">
          <em className="h">{project.name}</em>
        </div>
      </div>
      <span className="role">{project.title}</span>
      <p className="desc" dangerouslySetInnerHTML={{ __html: project.description }} />
      <div className="pull">"{project.pull}"</div>
      <div className="tags">
        {project.techStack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <div className="metrics">
        {project.metrics.map((m, i) => (
          <ProjectMetric key={i} metric={m} start={inView} />
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackXRef = useRef(0);
  const [progress, setProgress] = useState(8);
  const [idx, setIdx] = useState(1);

  // -------- Horizontal scroll behaviour (wheel · drag · arrow keys) --------
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const total = projects.length;

    const maxX = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

    const setTrackX = (x: number) => {
      const m = maxX();
      const clamped = Math.max(0, Math.min(m, x));
      trackXRef.current = clamped;
      track.style.transform = `translateX(${-clamped}px)`;
      const p = m === 0 ? 0 : (clamped / m) * 100;
      setProgress(Math.max(8, p));
      const computed = Math.min(total, Math.round((clamped / Math.max(m, 1)) * (total - 1)) + 1);
      setIdx(computed || 1);
    };

    const inViewport = () => {
      const r = wrap.getBoundingClientRect();
      return r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.4;
    };

    const onWheel = (e: WheelEvent) => {
      if (!inViewport()) return;
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const next = trackXRef.current + dx;
      if (next >= 0 && next <= maxX()) {
        setTrackX(next);
        e.preventDefault();
      }
    };

    let dragging = false;
    let dragStart = 0;
    let trackStart = 0;
    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      dragStart = e.clientX;
      trackStart = trackXRef.current;
      wrap.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (dragging) setTrackX(trackStart - (e.clientX - dragStart));
    };
    const onPointerUp = () => {
      dragging = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (!inViewport()) return;
      if (e.key === 'ArrowRight') setTrackX(trackXRef.current + 240);
      if (e.key === 'ArrowLeft') setTrackX(trackXRef.current - 240);
    };

    wrap.addEventListener('wheel', onWheel, { passive: false });
    wrap.addEventListener('pointerdown', onPointerDown);
    wrap.addEventListener('pointermove', onPointerMove);
    wrap.addEventListener('pointerup', onPointerUp);
    window.addEventListener('keydown', onKey);

    return () => {
      wrap.removeEventListener('wheel', onWheel);
      wrap.removeEventListener('pointerdown', onPointerDown);
      wrap.removeEventListener('pointermove', onPointerMove);
      wrap.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="span" className="s-eyebrow">[ IV ·  Selected Work ]</Reveal>
        <Reveal as="h2" className="s-title">
          A <em className="cobalt">dozen</em> shipping stories.
        </Reveal>
        <Reveal as="p" className="s-deck">
          Wheel · drag · or arrow keys. Each card is a system in production, a tradeoff explained,
          or a metric earned.
        </Reveal>
      </div>

      <div ref={wrapRef} className="container projects-wrap reveal in">
        <div ref={trackRef} className="projects-track" id="projectsTrack">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="scroll-rail">
          <span>SCROLL</span>
          <div
            className="bar"
            id="scrollBar"
            style={{ ['--p' as string]: `${progress}%` } as React.CSSProperties}
          />
          <span id="scrollCount">
            {idx} / {projects.length}
          </span>
        </div>
      </div>
    </section>
  );
}
