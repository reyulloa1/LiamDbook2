import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { translations } from './i18n';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BuyPage from './pages/BuyPage';

export default function App() {
  const [language, setLanguage] = useState('es');
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const revealTargets = document.querySelectorAll('.reveal');
    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [location.pathname, language]);

  const onToggleLanguage = () => setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  const t = translations[language];

  return (
    <Layout language={language} onToggleLanguage={onToggleLanguage} t={t}>
      <Routes>
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/about" element={<AboutPage t={t} />} />
        <Route path="/buy" element={<BuyPage t={t} />} />
      </Routes>
    </Layout>
  );
}
