
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  return (
    <section className="about-us-section">
      <div className="container">
        <div className="about-grid">
          {/* جانب الصورة التوضيحية لخط الإنتاج */}
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img
                src="https://cdn.yeniakit.com.tr/images/album/gunde-2-bin-liraya-bulacak-eleman-bulamiyorlar-artik-baska-careleri-kalmadi-yurt-disindan-eleman-55b7fe.png"
                alt="ERDAŞ Big Bag Üretim"
              />
            </div>
          </div>

          {/* نصوص التعريف بالشركة */}
          <div className="about-content">
            <span className="section-tag">{lang === 'tr' ? "Kurumsal" : "Corporate"}</span>
            <h1 className="section-heading">
              {lang === 'tr'
                ? "Sektörde Güven, Kalite ve Dayanıklılık Sunuyoruz"
                : "Delivering Trust, Quality and Durability in Industry"}
            </h1>

            <p className="about-desc">
              {lang === 'tr'
                ? "ERDAŞ Big Bag olarak Kocaeli Gebze tesislerimizde maden, kimya, inşaat ve tarım sektörleri için uluslararası kalite standartlarında polipropilen (PP) Big Bag çuval üretimi gerçekleştiriyoruz. Yüksek taşıma kapasitesi ve yırtılma direnci sağlayan özel dikiş tekniklerimizle, ağır sanayi yüklerinizi güvenle taşımanızı sağlıyoruz."
                : "As ERDAŞ Big Bag, we manufacture international standard polypropylene (PP) Big Bag packaging solutions for mining, chemical, construction, and agricultural sectors at our Gebze facility. With reinforced sewing techniques ensuring high tensile strength, we safeguard your bulk materials reliably."}
            </p>

            {/* نقاط القوة الأساسية */}
            <div className="about-features-grid">
              <div className="about-feature-box">
                <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
                <div>
                  <h4>{lang === 'tr' ? "Standartlara Uygunluk" : "Standard Compliance"}</h4>
                  <p>{lang === 'tr' ? "5:1 ve 6:1 uluslararası güvenlik katsayılarına tam uyumlu dikiş." : "Fully compliant with 5:1 and 6:1 safety factors."}</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="feature-icon"><i className="fa-solid fa-boxes-packing"></i></div>
                <div>
                  <h4>{lang === 'tr' ? "Özel Ölçü ve İmalat" : "Custom Sizes"}</h4>
                  <p>{lang === 'tr' ? "İhtiyacınıza uygun lamineli, etekli veya bacalı esnek üretim." : "Flexible production tailored to your specific industrial dimensions."}</p>
                </div>
              </div>
            </div>

            <div className="about-actions" style={{ marginTop: '25px' }}>
              <Link to="/iletisim" className="btn btn-primary">
                <span>{lang === 'tr' ? "Bizimle İletişime Geçin" : "Get in Touch"}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}