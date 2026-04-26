import { NavLink } from 'react-router-dom';

export default function Layout({ children, language, onToggleLanguage, t }) {
  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="brand">Liam D Book</div>
        <nav>
          <NavLink to="/">{t.nav.home}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/buy">{t.nav.buy}</NavLink>
        </nav>
        <button className="lang-toggle" onClick={onToggleLanguage}>
          {language === 'es' ? 'ES 🇪🇸' : 'EN 🇺🇸'}
        </button>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>{t.footer}</p>
        <div className="socials" aria-label="social media icons">
          <span>○</span>
          <span>○</span>
          <span>○</span>
        </div>
      </footer>
    </div>
  );
}
