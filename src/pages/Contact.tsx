import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo } from '../data/siteData';

export default function Contact() {
  const { lang } = useLanguage();

  // حالات إرسال النموذج وحالة الـ Toast
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });

  // دالة إظهار التنبيه مع إغلاق تلقائي بعد 5 ثوانٍ
  const triggerToast = (type: 'success' | 'error', title: string, message: string) => {
    setToast({ show: true, type, title, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // معالجة إرسال الفورم إلى Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formJson)
      });

      if (response.status === 200) {
        triggerToast(
          'success',
          lang === 'tr' ? 'Başarılı!' : 'Success!',
          lang === 'tr'
            ? 'Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız.'
            : 'Your message has been received. We will get back to you shortly.'
        );
        form.reset();
      } else {
        triggerToast(
          'error',
          lang === 'tr' ? 'Hata!' : 'Error!',
          lang === 'tr'
            ? 'Bir sorun oluştu. Lütfen tekrar deneyin.'
            : 'An error occurred. Please try again.'
        );
      }
    } catch {
      triggerToast(
        'error',
        lang === 'tr' ? 'Bağlantı Hatası!' : 'Connection Error!',
        lang === 'tr'
          ? 'İnternet bağlantınızı kontrol edip tekrar deneyin.'
          : 'Please verify your internet connection.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* 1. ترويسة الصفحة */}
      <section className="contact-page-header">
        <div className="container">
          <span className="contact-page-tag">{lang === 'tr' ? "Bize Ulaşın" : "Contact Us"}</span>
          <h1 className="contact-page-title">
            {lang === 'tr' ? "İletişim & Hızlı Fiyat Teklifi" : "Contact & Instant Quote Request"}
          </h1>
          <p className="contact-page-desc">
            {lang === 'tr'
              ? "Ürün talepleriniz, toptan alımlar ve teknik detaylar için formu doldurabilir ya da doğrudan bizimle iletişime geçebilirsiniz."
              : "For bulk orders and technical specifications, submit the inquiry form or reach out directly."}
          </p>
        </div>
      </section>

      {/* 2. الخريطة التفاعلية */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper-card">
            <div className="map-header-bar">
              <h3>
                <i className="fa-solid fa-map-location-dot"></i>
                <span>{lang === 'tr' ? "Tesis Konumumuz" : "Our Plant Location"}</span>
              </h3>
              <span>{lang === 'tr' ? "Körfez / Kocaeli Sanayi Bölgesi" : "Körfez / Kocaeli Industrial Area"}</span>
            </div>
            <div className="map-frame-holder">
              <iframe
                src={companyInfo.mapUrl}
                title="ERDAŞ Fabrika Konumu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. بيانات المصنع وفورم التواصل */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* بطاقات البيانات المباشرة */}
            <div className="contact-info-block">
              <div className="info-row">
                <i className="fa-solid fa-location-dot"></i>
                <div className="info-text">
                  <strong>{lang === 'tr' ? "Fabrika & Ofis Adresi:" : "Factory & Office Address:"}</strong>
                  <p>{companyInfo.address[lang]}</p>
                </div>
              </div>

              <div className="info-row">
                <i className="fa-solid fa-phone"></i>
                <div className="info-text">
                  <strong>{lang === 'tr' ? "Telefon:" : "Phone:"}</strong>
                  <a href={`tel:${companyInfo.phoneRaw}`}>{companyInfo.phone}</a>
                </div>
              </div>

              <div className="info-row">
                <i className="fa-solid fa-envelope"></i>
                <div className="info-text">
                  <strong>{lang === 'tr' ? "E-posta:" : "Email:"}</strong>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </div>
              </div>
            </div>

            {/* نموذج Web3Forms */}
            <form className="contact-form-box" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="889d83af-ef3d-4a01-9166-7c98dbb5849a" />
              <input type="hidden" name="from_name" value="ERDAŞ Web Sitesi İletişim Formu" />
              <input type="hidden" name="subject" value="Yeni İletişim & Fiyat Teklifi Mesajı (ERDAŞ)" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className="form-two-cols">
                <input
                  type="text"
                  name="name"
                  className="form-field"
                  placeholder={lang === 'tr' ? "Adınız *" : "Your Name *"}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="form-field"
                  placeholder={lang === 'tr' ? "Telefon Numaranız *" : "Phone Number *"}
                  required
                />
              </div>

              <div className="form-two-cols">
                <input
                  type="email"
                  name="email"
                  className="form-field"
                  placeholder={lang === 'tr' ? "E-posta Adresiniz *" : "Email Address *"}
                  required
                />
                <input
                  type="text"
                  name="konu"
                  className="form-field"
                  placeholder={lang === 'tr' ? "Konu *" : "Subject *"}
                  required
                />
              </div>

              <textarea
                name="message"
                className="form-field"
                rows={5}
                placeholder={
                  lang === 'tr'
                    ? "Mesajınız veya Teklif Detayları (Ölçü, Taşıma Kapasitesi, Adet vb.) *"
                    : "Your Inquiry Details (Dimensions, SWL Capacity, Quantity etc.) *"
                }
                required
              ></textarea>

              <div className="form-submit-row">
                <button type="submit" className="btn-send-message" disabled={isSubmitting}>
                  <span>
                    {isSubmitting
                      ? (lang === 'tr' ? "Gönderiliyor..." : "Sending...")
                      : (lang === 'tr' ? "Mesajı Gönder" : "Send Message")}
                  </span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. صندوق الإشعار العائم (Toast Notification) */}
      <div className={`toast-popup ${toast.type} ${toast.show ? 'show' : ''}`} role="alert">
        <div className="toast-icon-wrap">
          <i className={toast.type === 'success' ? "fa-solid fa-check" : "fa-solid fa-triangle-exclamation"}></i>
        </div>
        <div className="toast-text">
          <h4>{toast.title}</h4>
          <p>{toast.message}</p>
        </div>
        <button
          type="button"
          className="toast-close-btn"
          onClick={() => setToast((prev) => ({ ...prev, show: false }))}
        >
          &times;
        </button>
        <div className="toast-progress-bar"></div>
      </div>
    </main>
  );
}