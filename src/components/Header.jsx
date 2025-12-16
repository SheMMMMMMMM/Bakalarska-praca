import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/components/header.css";
import logo from "../assets/images/logo/logo-9.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // Закриття меню при клік поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner container">

        {/* LOGO */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="nav">
          <NavLink to="/projects" className="nav-link">{t('nav.projects')}</NavLink>
          <NavLink to="/about" className="nav-link">{t('nav.about')}</NavLink>
          <NavLink to="/contact" className="nav-link">{t('nav.contact')}</NavLink>
        </nav>

        {/* LANGUAGE SELECTOR */}
        <div className="language-selector">
          <button 
            className={`lang-btn ${i18n.language === 'uk' ? 'active' : ''}`}
            onClick={() => changeLanguage('uk')}
          >
            UA
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'sk' ? 'active' : ''}`}
            onClick={() => changeLanguage('sk')}
          >
            SK
          </button>
        </div>

        {/* BURGER BUTTON */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{t('nav.projects')}</NavLink>
        <NavLink to="/about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{t('nav.about')}</NavLink>
        <NavLink to="/contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</NavLink>
        
        <div className="mobile-language-selector">
          <button 
            className={`lang-btn ${i18n.language === 'uk' ? 'active' : ''}`}
            onClick={() => changeLanguage('uk')}
          >
            UA
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'sk' ? 'active' : ''}`}
            onClick={() => changeLanguage('sk')}
          >
            SK
          </button>
        </div>
      </nav>
    </header>
  );
}
