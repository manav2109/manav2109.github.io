interface Props {
  items: string[];
  variant?: 'default' | 'alt';
}

/**
 * Looping ticker. Items are duplicated so the CSS `marq` keyframe loops seamlessly.
 */
export function Marquee({ items, variant = 'default' }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee${variant === 'alt' ? ' alt' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
