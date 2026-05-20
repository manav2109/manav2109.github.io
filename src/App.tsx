import { Analytics } from './components/Analytics';
import { ConfettiCanvas } from './components/ConfettiCanvas';
import { WarpPortalCursor } from './components/WarpPortalCursor';
import { Marquee } from './components/Marquee';
import { Masthead } from './components/Masthead';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Credentials } from './components/Credentials';
import { Life } from './components/Life';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { marqueeTop, marqueeBottom } from './data/portfolio';
import './styles/theme.css';

export default function App() {
  return (
    <>
      <Analytics />
      <ConfettiCanvas />
      <WarpPortalCursor />

      <Marquee items={marqueeTop} />
      <Masthead />

      <main className="container">
        <Hero />
      </main>

      <div className="divider" />
      <About />

      <Marquee items={marqueeBottom} variant="alt" />

      <Timeline />
      <div className="divider" />

      <TechStack />
      <div className="divider" />

      <Projects />
      <div className="divider" />

      <Credentials />
      <div className="divider" />

      <Life />
      <div className="divider" />

      <Contact />
      <Footer />
    </>
  );
}
