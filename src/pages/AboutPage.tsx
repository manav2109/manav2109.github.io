import { useEffect } from 'react';
import { Masthead } from '../components/Masthead';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function AboutPage() {
  useEffect(() => {
    document.title = 'About — Manav Rathi';
    return () => { document.title = 'Manav Rathi — Software Engineer · Cloud & DevOps'; };
  }, []);

  return (
    <>
      <Masthead activePage="about" />
      <About />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}
