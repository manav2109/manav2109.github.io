import { useEffect } from 'react';
import { Masthead } from '../components/Masthead';
import { TechStack } from '../components/TechStack';
import { Footer } from '../components/Footer';

export function StackPage() {
  useEffect(() => {
    document.title = 'Stack — Manav Rathi';
    return () => { document.title = 'Manav Rathi — Software Engineer · Cloud & DevOps'; };
  }, []);

  return (
    <>
      <Masthead activePage="stack" />
      <TechStack />
      <Footer />
    </>
  );
}
