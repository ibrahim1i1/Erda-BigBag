import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo, productsData } from '../data/siteData';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  // حالة فتح وإغلاق قائمة الموبايل
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // حالة فتح القائمة المنسدلة في الموبايل
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // إغلاق المنيو عند الضغط على أي رابط
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* 1. الشريط العلوي للإيميل واللغات */}
      <aside className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <span className="badge">
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </span>
          </div>
          <div className="lang-switch">
            <i className="fa-solid fa-globe"></i>
            <button 
              className={lang === 'tr' ? 'active' : ''} 
              onClick={() => setLang('tr')}
            >
              TR
            </button>
            <span>|</span>
            <button 
              className={lang === 'en' ? 'active' : ''} 
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </aside>

      {/* 2. شريط التصفح الأساسي */}
      <header className="main-header">
        <div className="container nav-content">
          {/* الشعار */}
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <img src="/images/logo.png" alt={companyInfo.name} className="header-logo-img" />
          </Link>

          {/* زر المنيو للهواتف والآيباد */}
          <button 
            className={`menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* روابط التصفح */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/hakkimizda" onClick={closeMenu}>
                {lang === 'tr' ? 'Hakkımızda' : 'About Us'}
              </NavLink>
            </li>

            {/* القائمة المنسدلة للمنتجات */}
            <li className={`dropdown-item ${isDropdownOpen ? 'active' : ''}`}>
              <div 
                className="dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{lang === 'tr' ? 'Ürünlerimiz' : 'Products'}</span>
                <i className="fa-solid fa-chevron-down arrow-icon"></i>
              </div>
              <ul className="submenu">
                {productsData.map((prod) => (
                  <li key={prod.slug}>
                    <Link to={`/urun/${prod.slug}`} onClick={closeMenu}>
                      {prod.title[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/iletisim" onClick={closeMenu}>
                {lang === 'tr' ? 'İletişim' : 'Contact'}
              </NavLink>
            </li>
            <li>
              <Link to="/iletisim" className="nav-btn" onClick={closeMenu}>
                {lang === 'tr' ? 'Fiyat Teklifi Al' : 'Get a Quote'}
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* طبقة التعتيم السوداء خلف القائمة عند فتحها في الهاتف */}
      <div 
        className={`nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
}