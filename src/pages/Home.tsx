import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/siteData';

export default function Home() {
  const { lang } = useLanguage();

  // مصفوفة صور سلايدر الهيرو
  const heroImages = [
    "https://img.freepik.com/premium-photo/captivating-4k-image-showcasing-exterior-factory_717732-6715.jpg",
    "https://media.istockphoto.com/id/2143488405/photo/advanced-robot-arm-conveyor-line-manufacturing-electronics-enclosure-boxes-high-angle-shot.jpg?s=170667a&w=0&k=20&c=dC_Ten2cziGuMeFsWdTyz-aTs3RxQsa5kQY2i2-KUg0="
  ];

  // مؤشر الصورة الحالية في السلايدر
  const [currentSlide, setCurrentSlide] = useState(0);

  // تشغيل السلايدر التلقائي كل 4 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main>
      {/* 1. سكشن الهيرو الترحيبي */}
      <section className="hero-section" id="anasayfa">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              {lang === 'tr'
                ? "Ağır Yükler İçin Güçlü & Dayanıklı Big Bag"
                : "Strong & Durable Big Bags For Heavy Loads"}
            </h1>
            <p className="hero-desc">
              {lang === 'tr'
                ? "Gebze tesislerimizde 500 kg ile 2000 kg taşıma kapasiteli, maden, kimya ve tarım sektörlerine özel yüksek mukavemetli çuval üretimi."
                : "High-strength bag production with 500 kg to 2000 kg carrying capacity in our Gebze facilities, specialized for mining, chemical and agricultural sectors."}
            </p>
            <div className="hero-actions">
              <Link to="/iletisim" className="btn btn-primary">
                <i className="fa-solid fa-calculator"></i>
                <span>{lang === 'tr' ? "Hemen Teklif Al" : "Request Instant Quote"}</span>
              </Link>
              <a href="#torba-tipleri" className="btn btn-secondary">
                {lang === 'tr' ? "Ürünleri İncele" : "View Products"}
              </a>
            </div>
          </div>

          {/* صندوق سلايدر الصور */}
          <div className="hero-image-box">
            {heroImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="ERDAŞ Üretim Tesisi"
                className={index === currentSlide ? 'active' : ''}
              />
            ))}
            <div className="image-label">
              <span>
                {lang === 'tr' ? "Yüksek Mukavemetli Sanayi Çuvalları" : "High Durability Industrial Bags"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. سكشن عرض موديلات المنتجات الأربعة */}
      <section className="erdas-showcase-section" id="torba-tipleri">
        <div className="container">
          <h2 className="urunlerimiz">
            {lang === 'tr' ? "Ürünlerimiz" : "Our Products"}
          </h2>
          <p className="urunlerimiz-praqraf">
            {lang === 'tr'
              ? "Endüstriyel Taşıma ve Ağır Hizmet Ambalaj Çözümleri"
              : "Industrial Transport and Heavy-Duty Packaging Solutions"}
          </p>

          <div className="erdas-bags-grid">
            {productsData.map((product) => (
              <div key={product.slug} className="erdas-bag-item">
                <div className="bag-header-line">
                  <h4>{product.title[lang]}</h4>
                </div>
                <div className="bag-render-view">
                  <img src={`/${product.image}`} alt={product.title[lang]} />
                </div>
                {/* التوجيه لصفحة التفاصيل الديناميكية */}
                <Link to={`/urun/${product.slug}`} className="btn-clean-incele">
                  {lang === 'tr' ? "İncele" : "Inspect"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. سكشن الحلول والميزات الصناعية */}
      <section className="solutions-section">
        <h2 className="solutions-title">
          {lang === 'tr' ? "Neden ERDAŞ Big Bag?" : "Why ERDAŞ Big Bag?"}
        </h2>
        <p className="solutions-paragraf">
          {lang === 'tr'
            ? "Üretimde Güven, Kalite ve Yüksek Taşıma Standartları"
            : "Trust, Quality, and High Transport Standards in Production"}
        </p>

        <div className="container">
          <div className="solutions-grid">
            {/* بطاقة السعة */}
            <div className="solution-card card-capacity">
              <div className="card-icon-box"><i className="fa-solid fa-weight-hanging"></i></div>
              <h3 className="card-title">{lang === 'tr' ? "Yüksek Taşıma Kapasitesi" : "High Carrying Capacity"}</h3>
              <p className="card-desc">
                {lang === 'tr'
                  ? "Ağır, granül ve hacimli malzemelerin güvenli ve ekonomik şekilde taşınmasını sağlayan endüstriyel çözümler."
                  : "Industrial solutions ensuring safe and economical transport of heavy, granular, and bulky materials."}
              </p>
            </div>

            {/* بطاقة جودة الخامة */}
            <div className="solution-card card-material">
              <div className="card-icon-box"><i className="fa-solid fa-shield-halved"></i></div>
              <h3 className="card-title">{lang === 'tr' ? "Dayanıklı Malzeme" : "Durable Material"}</h3>
              <p className="card-desc">
                {lang === 'tr'
                  ? "Dayanıklı polipropilen (PP) dokumadan üretilen torbalar, zorlu şantiye ve depolama şartlarına direnç gösterir."
                  : "Produced from robust polypropylene (PP) fabric with high tear and wear resistance."}
              </p>
            </div>

            {/* بطاقة مقاومة الشمس والرطوبة */}
            <div className="solution-card card-uv">
              <div className="card-icon-box"><i className="fa-solid fa-sun"></i></div>
              <h3 className="card-title">{lang === 'tr' ? "UV ve Nem Direnci" : "UV and Moisture Resistance"}</h3>
              <p className="card-desc">
                {lang === 'tr'
                  ? "Güneş ışığına karşı formunu uzun süre koruyan UV katkılı kumaş ile açık alan depolamada tam güvenlik."
                  : "UV-treated fabric maintaining form and strength during prolonged outdoor open-air storage."}
              </p>
            </div>

            {/* بطاقة الأمان 5:1 و 6:1 */}
            <div className="solution-card card-safety">
              <div className="card-icon-box"><i className="fa-solid fa-certificate"></i></div>
              <h3 className="card-title">{lang === 'tr' ? "Güvenlik Öncelikli" : "Safety First"}</h3>
              <p className="card-desc">
                {lang === 'tr'
                  ? "Uluslararası 5:1 ve 6:1 emniyet katsayılarına tam uyumlu dikişlerle kaldırma risklerini en aza indirir."
                  : "Strictly compliant with international 5:1 and 6:1 safety factors to eliminate lifting and handling hazards."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}