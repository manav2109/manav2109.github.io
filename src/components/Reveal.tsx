import { type CSSProperties, type ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  spring?: boolean;
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Wrapper that mirrors the `.reveal` IntersectionObserver pattern from the static page.
 * Adds the `.reveal` and (when in view) `.in` class.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  spring = false,
  threshold = 0.18,
  style,
}: Props) {
  const [ref, inView] = useReveal<HTMLElement>({ threshold });
  const cls = ['reveal', spring ? 'spring' : '', inView ? 'in' : '', className]
    .filter(Boolean)
    .join(' ');

  // SAFETY: cast to any because TS can't relate the dynamic Tag back to `ref` type.
  // We always render a real DOM element so the ref attaches correctly.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} className={cls} style={style}>
      {children}
    </Component>
  );
}
