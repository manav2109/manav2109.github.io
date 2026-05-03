import { useEffect, useRef } from 'react';

/**
 * Warp Portal cursor — three concentric rotating rings + holographic trail canvas.
 * Mirrors the original `cursor` + `trail` behaviour from index.html.
 */
export function WarpPortalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;
    const ctx = trail.getContext('2d');
    if (!ctx) return;

    const fitTrail = () => {
      trail.width = window.innerWidth;
      trail.height = window.innerHeight;
    };
    fitTrail();
    window.addEventListener('resize', fitTrail);

    let mouseX = -100;
    let mouseY = -100;
    let smX = -100;
    let smY = -100;
    let hue = 0;
    type TrailPoint = { x: number; y: number; h: number; life: number };
    const points: TrailPoint[] = [];

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.classList.add('active');
      points.push({ x: mouseX, y: mouseY, h: hue, life: 1 });
      if (points.length > 30) points.shift();
      hue = (hue + 12) % 360;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const t = target?.closest('a, button, .pcard, .clink, .stat-card, .stack-chip');
      cursor.classList.toggle('hover', !!t);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    let raf = 0;
    const draw = () => {
      smX += (mouseX - smX) * 0.22;
      smY += (mouseY - smY) * 0.22;
      cursor.style.left = `${smX}px`;
      cursor.style.top = `${smY}px`;

      ctx.clearRect(0, 0, trail.width, trail.height);
      for (const p of points) {
        p.life -= 0.03;
        if (p.life <= 0) continue;
        const r = 16 * p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grad.addColorStop(0, `hsla(${p.h}, 92%, 60%, ${0.38 * p.life})`);
        grad.addColorStop(1, `hsla(${p.h}, 92%, 60%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', fitTrail);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={trailRef} className="trail" id="trailCanvas" aria-hidden="true" />
      <div ref={cursorRef} className="cursor" id="cursor" aria-hidden="true">
        <svg viewBox="-50 -50 100 100">
          <g className="ring-1">
            <circle r="42" fill="none" stroke="#0a0a0a" strokeWidth="2.4" strokeDasharray="8 5" />
            <circle r="42" fill="none" stroke="#0033ff" strokeWidth="1.2" strokeDasharray="8 5" strokeDashoffset="2" />
            <polygon points="0,-46 4,-40 -4,-40" fill="#0033ff" stroke="#0a0a0a" strokeWidth="1" />
          </g>
          <g className="ring-2">
            <circle r="30" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeDasharray="3 5" />
            <circle r="30" fill="none" stroke="#ff2e8b" strokeWidth="1.4" strokeDasharray="3 5" />
            <circle cx="0" cy="-30" r="3" fill="#ffd400" stroke="#0a0a0a" strokeWidth="1" />
            <circle cx="0" cy="30" r="3" fill="#ff2e8b" stroke="#0a0a0a" strokeWidth="1" />
          </g>
          <g className="ring-3">
            <circle r="18" fill="none" stroke="#0a0a0a" strokeWidth="1.4" strokeDasharray="2 4" />
            <line x1="-22" y1="0" x2="-14" y2="0" stroke="#0a0a0a" strokeWidth="1.4" />
            <line x1="14" y1="0" x2="22" y2="0" stroke="#0a0a0a" strokeWidth="1.4" />
            <line x1="0" y1="-22" x2="0" y2="-14" stroke="#0a0a0a" strokeWidth="1.4" />
            <line x1="0" y1="14" x2="0" y2="22" stroke="#0a0a0a" strokeWidth="1.4" />
          </g>
          <circle r="3.5" fill="#ffd400" stroke="#0a0a0a" strokeWidth="1.4" />
        </svg>
      </div>
    </>
  );
}
