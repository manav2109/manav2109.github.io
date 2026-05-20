import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Disable browser scroll restoration so React Router controls scroll position
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

// Restore path after GitHub Pages 404 redirect
const spa = sessionStorage.getItem('spa_redirect');
if (spa) { sessionStorage.removeItem('spa_redirect'); window.history.replaceState(null, '', spa); }

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
