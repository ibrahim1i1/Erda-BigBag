
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo, productsData } from '../data/siteData';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* عمود التعريف بالشركة */}
        <div className="footer-brand">
          <Link to="/" className="brand-logo">
            <img src="/images/footer-logo.png" alt={companyInfo.name} className="footer-logo-img" />
          </Link>
          <p className="footer-about">
            {lang === 'tr'
              ? "Kocaeli Gebze'de dünya standartlarında polipropilen endüstriyel ambalaj ve Big Bag imalatı."
              : "World-class polypropylene industrial packaging and Big Bag manufacturing in Gebze, Kocaeli."}
          </p>
        </div>

        {/* عمود الروابط السريعة */}
        <div className="footer-links">
          <h4>{lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}</h4>
          <ul>
            <li><Link to="/">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link></li>
            <li><Link to="/hakkimizda">{lang === 'tr' ? 'Hakkımızda' : 'About Us'}</Link></li>
            <li><Link to="/iletisim">{lang === 'tr' ? 'İletişim & Fiyat Teklifi' : 'Contact & Quote'}</Link></li>
          </ul>
        </div>

        {/* عمود معلومات التواصل المأخوذة من siteData مباشرة */}
        <div className="footer-contact">
          <h4>{lang === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}</h4>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {companyInfo.address[lang]}
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <a href={`tel:${companyInfo.phoneRaw}`}>{companyInfo.phone}</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
          </p>
        </div>
      </div>

      {/* حقوق النشر السفلية */}
      <div className="footer-bottom">
        <p>&copy; 2026 {companyInfo.name}. {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}</p>
      </div>
    </footer>
  );
}