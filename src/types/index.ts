// تعريف اللغات المدعومة في الموقع
export type Language = 'tr' | 'en';

// هيكل النصوص ثنائية اللغة (تركي / إنجليزي)
export interface LocalizedText {
  tr: string;
  en: string;
}

// هيكل بيانات ميزة أو مواصفة داخل المنتج
export interface ProductFeature {
  tr: string;
  en: string;
}

// هيكل بيانات المنتج بالكامل
export interface Product {
  slug: string;                 // الرابط المخصص للمنتج في المتصفح (URL)
  title: LocalizedText;         // اسم المنتج باللغتين
  image: string;                // مسار صورة المنتج
  capacity: string;             // سعة التحميل بالأرقام (مثل 1000 kg - 2000 kg)
  capacityNote: LocalizedText;     // ملاحظة السعة (إنتاج خاص حسب الطلب)
  desc: LocalizedText;          // تعريف المنتج (Ürün Nedir)
  usage: LocalizedText;         // مجالات الاستخدام (Kullanım Alanları)
  features: ProductFeature[];   // قائمة الميزات البارزة (Öne Çıkan Özellikler)
}

// هيكل بيانات المصنع ومعلومات التواصل
export interface CompanyInfo {
  name: string;
  phone: string;                // رقم الهاتف المنسق للعرض
  phoneRaw: string;             // رقم الهاتف الصافي لروابط الاتصال المباشر tel:
  whatsapp: string;             // رقم الواتساب المنسق للعرض
  whatsappRaw: string;          // رقم الواتساب الصافي مع مفتاح الدولة
  email: string;
  address: LocalizedText;
  mapUrl: string;               // رابط خرائط جوجل للـ iframe
}