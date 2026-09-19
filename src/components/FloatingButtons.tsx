
import { companyInfo } from '../data/siteData';

export default function FloatingButtons() {
  return (
    <>
      {/* زر الاتصال المباشر الأزرق في الزاوية اليسرى */}
      <div className="call-num-btn">
        <a 
          href={`tel:${companyInfo.phoneRaw}`} 
          className="floating-btn btn-call" 
          aria-label="Hemen Ara"
        >
          <div className="pulse-wave pulse-call"></div>
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      {/* زر الواتساب الأخضر في الزاوية اليمنى */}
      <div className="whats-button">
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}`}
          className="floating-btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Destek"
        >
          <div className="pulse-wave pulse-whatsapp"></div>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
}