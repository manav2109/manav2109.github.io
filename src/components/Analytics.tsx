import { useEffect } from 'react';
import { track } from '../lib/analytics';

const SECTIONS = ['home', 'about', 'experience', 'stack', 'projects', 'credentials', 'life', 'contact'];

export function Analytics() {
  useEffect(() => {
    const timers = new Map<string, number>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          timers.set(id, performance.now());
        } else {
          const start = timers.get(id);
          if (start !== undefined) {
            const seconds = Math.round((performance.now() - start) / 1000);
            if (seconds >= 2) track('section_time', { section: id, seconds });
            timers.delete(id);
          }
        }
      }
    }, { threshold: 0.3 });

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
