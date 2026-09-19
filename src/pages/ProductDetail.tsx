import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { productsData, companyInfo } from '../data/siteData';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();

  // جلب بيانات المنتج من الملف المركزي حسب الـ slug
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>{lang === 'tr' ? 'Ürün Bulunamadı' : 'Product Not Found'}</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
          {lang === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>
      </div>
    );
  }

  return (
    <section className="product-detail-section" style={{ padding: '60px 0', minHeight: 'auto' }}>
      <div className="container">
        <div className="product-top-header" style={{ marginBottom: '30px' }}>
          <h1 className="product-main-title">{product.title[lang]}</h1>
        </div>

        <div className="product-grid-container">
          {/* صورة المنتج */}
          <div className="product-media-wrapper">
            <img src={`/${product.image}`} alt={product.title[lang]} />
          </div>

          {/* قائمة المواصفات */}
          <div className="product-specs-list">
            {/* بطاقة ما هو المنتج */}
            <div className="spec-card">
              <div className="spec-icon"><i className="fa-solid fa-cube"></i></div>
              <div className="spec-body">
                <h3>{lang === 'tr' ? 'Ürün Nedir?' : 'What is the Product?'}</h3>
                <p>{product.desc[lang]}</p>
              </div>
            </div>

            {/* بطاقة سعة الحمل */}
            <div className="spec-card highlight">
              <div className="spec-icon"><i className="fa-solid fa-weight-hanging"></i></div>
              <div className="spec-body">
                <h3>{lang === 'tr' ? 'Taşıma Kapasitesi (SWL)' : 'Load Capacity (SWL)'}</h3>
                <strong style={{ fontSize: '18px', color: '#16a34a' }}>{product.capacity}</strong>
                <span className="spec-note" style={{ marginLeft: '8px', color: '#64748b' }}>
                  {product.capacityNote[lang]}
                </span>
              </div>
            </div>

            {/* بطاقة مجالات الاستخدام */}
            <div className="spec-card">
              <div className="spec-icon"><i className="fa-solid fa-industry"></i></div>
              <div className="spec-body">
                <h3>{lang === 'tr' ? 'Kullanım Alanları' : 'Applications'}</h3>
                <p>{product.usage[lang]}</p>
              </div>
            </div>

            {/* بطاقة أبرز الخصائص */}
            <div className="spec-card">
              <div className="spec-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="spec-body">
                <h3>{lang === 'tr' ? 'Öne Çıkan Özellikler' : 'Key Features'}</h3>
                <ul className="spec-features-list">
                  {product.features.map((item, idx) => (
                    <li key={idx}>{item[lang]}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* أزرار الإجراء السريع للمنتج */}
            <div className="product-quick-actions" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(
                  `Merhaba, ${product.title.tr} hakkında fiyat teklifi almak istiyorum.`
                )}`}
                className="spec-action-btn wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>{lang === 'tr' ? 'WhatsApp ile Fiyat Al' : 'Get Quote on WhatsApp'}</span>
              </a>
              <a href={`tel:${companyInfo.phoneRaw}`} className="spec-action-btn call-btn">
                <i className="fa-solid fa-phone"></i>
                <span>{lang === 'tr' ? 'Hemen Ara' : 'Call Directly'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}