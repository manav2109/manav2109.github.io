import { useEffect } from 'react';
import { Masthead } from '../components/Masthead';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function WorkPage() {
  useEffect(() => {
    document.title = 'Work — Manav Rathi';
    return () => { document.title = 'Manav Rathi — Software Engineer · Cloud & DevOps'; };
  }, []);

  return (
    <>
      <Masthead activePage="work" />
      <Projects />
      <Footer />
    </>
  );
}
