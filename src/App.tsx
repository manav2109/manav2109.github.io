import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { Courses } from './pages/Courses';
import { marqueeTop, marqueeBottom } from './data/portfolio';
import './styles/theme.css';

function Home() {
  return (
    <>
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

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ConfettiCanvas />
      <WarpPortalCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
