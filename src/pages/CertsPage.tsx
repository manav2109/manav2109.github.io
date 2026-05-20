import { useEffect } from 'react';
import { Masthead } from '../components/Masthead';
import { Credentials } from '../components/Credentials';
import { Footer } from '../components/Footer';

export function CertsPage() {
  useEffect(() => {
    document.title = 'Certifications — Manav Rathi';
    return () => { document.title = 'Manav Rathi — Software Engineer · Cloud & DevOps'; };
  }, []);

  return (
    <>
      <Masthead activePage="certs" />
      <Credentials />
      <Footer />
    </>
  );
}
