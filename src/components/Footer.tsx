export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <span>
        <span className="foot-stamp">© {year} Manav Rathi</span> · Software Engineer · Cloud &amp;
        DevOps
      </span>
    </footer>
  );
}
