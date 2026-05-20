declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    clarity: (cmd: string, ...args: unknown[]) => void;
  }
}

type EventMap = {
  cta_click:     { button: 'hire_me' | 'see_work' | 'download_cv' };
  project_view:  { project_name: string };
  contact_click: { channel: string };
  section_time:  { section: string; seconds: number };
};

export function track<E extends keyof EventMap>(event: E, params: EventMap[E]) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
  if (typeof window.clarity === 'function') {
    window.clarity('event', event);
  }
}
