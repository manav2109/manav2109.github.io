import { useEffect, useRef } from 'react';

const COLORS = ['#ff2e8b', '#0033ff', '#ffd400', '#00b86b', '#79e4ff', '#ff7ae6'];

interface Confetto {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  c: string;
  size: number;
  life: number;
}

/**
 * Listens for the global `confetti-burst` event and rains brutalist-edged squares.
 */
export function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confRef = useRef<Confetto[]>([]);

  useEffect(() => {
    const cf = canvasRef.current;
    if (!cf) return;
    const cctx = cf.getContext('2d');
    if (!cctx) return;

    const fit = () => {
      cf.width = window.innerWidth;
      cf.height = window.innerHeight;
    };
    fit();
    window.addEventListener('resize', fit);

    const burst = () => {
      const cx = window.innerWidth * 0.7;
      const cy = window.innerHeight * 0.5;
      for (let i = 0; i < 80; i++) {
        const ang = Math.random() * Math.PI * 2;
        const sp = 4 + Math.random() * 8;
        confRef.current.push({
          x: cx,
          y: cy,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp - 3,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.4,
          c: COLORS[i % COLORS.length],
          size: 6 + Math.random() * 8,
          life: 1,
        });
      }
    };
    window.addEventListener('confetti-burst', burst);

    let raf = 0;
    const draw = () => {
      cctx.clearRect(0, 0, cf.width, cf.height);
      const conf = confRef.current;
      for (let i = conf.length - 1; i >= 0; i--) {
        const p = conf[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.rot += p.vr;
        p.life -= 0.012;
        if (p.life <= 0 || p.y > window.innerHeight + 40) {
          conf.splice(i, 1);
          continue;
        }
        cctx.save();
        cctx.translate(p.x, p.y);
        cctx.rotate(p.rot);
        cctx.fillStyle = p.c;
        cctx.globalAlpha = p.life;
        cctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        cctx.strokeStyle = '#0a0a0a';
        cctx.lineWidth = 1.2;
        cctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        cctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', fit);
      window.removeEventListener('confetti-burst', burst);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti" id="confettiCanvas" aria-hidden="true" />;
}
