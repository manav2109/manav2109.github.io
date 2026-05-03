import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';

interface Props {
  target: number;
  suffix?: string;
  label: string;
  /** Skip waiting for IO and start counting immediately (used for hero stats). */
  immediate?: boolean;
}

export function StatCard({ target, suffix, label, immediate = false }: Props) {
  const [ref, inView] = useReveal<HTMLDivElement>({ threshold: 0.4 });
  const trigger = immediate || inView;
  const text = useCountUp({ target, suffix, start: trigger });

  return (
    <div ref={ref} className={`stat-card${trigger ? ' in' : ''}`}>
      <div className="stat-num">{text}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
