import { useEffect } from 'react';
import { Masthead } from '../components/Masthead';
import { Timeline } from '../components/Timeline';
import { Footer } from '../components/Footer';

export function CareerPage() {
  useEffect(() => {
    document.title = 'Career — Manav Rathi';
    return () => { document.title = 'Manav Rathi — Software Engineer · Cloud & DevOps'; };
  }, []);

  return (
    <>
      <Masthead activePage="career" />
      <Timeline />
      <Footer />
    </>
  );
}
