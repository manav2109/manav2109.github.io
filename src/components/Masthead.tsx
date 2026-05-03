export function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <div className="masthead-title">
          Manav <span className="holo-text">Rathi</span>
        </div>
        <nav className="masthead-nav">
          <a href="#about">ABOUT</a>
          <a href="#experience">CAREER</a>
          <a href="#stack">STACK</a>
          <a href="#projects">WORK</a>
          <a href="#contact" className="cta">
            HIRE ME ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
