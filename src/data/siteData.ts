import {type CompanyInfo,type Product } from '../types';


// معلومات المصنع الموحدة لكل الصفحات
export const companyInfo: CompanyInfo = {
  name: "ERDAŞ Big Bag",
  phone: "+90 262 653 08 25",
  phoneRaw: "+902626530825",
  whatsapp: "+90 532 781 04 41",
  whatsappRaw: "905327810441",
  email: "info@erdasgrup.com",
  address: {
    tr: "Cumhuriyet mahallesi çarşı caddesi no 92 Körfez / Kocaeli, Türkiye",
    en: "Cumhuriyet Mah. Çarşı Cd. No:92 Körfez / Kocaeli, Turkey"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.056874475854!2d29.649379923725085!3d40.80474397137977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb3b0126f9797b%3A0xa70a5b146b17aecc!2zQ3VtaHVyaXlldCwgw4dhcsWfxLEgQ2QuIE5vOjkyLCA0MTgwMCBLw7ZyZmV6L0tvY2FlbGk!5e0!3m2!1sar!2str!4v1789580977428!5m2!1sar!2str"
};

// مصفوفة المنتجات الأربعة
export const productsData: Product[] = [
  {
    slug: "standart-4-kulplu",
    title: { tr: "Standart 4 Kulplu Big Bag", en: "Standard 4-Loop Big Bag" },
    image: "public/images/standart-big-bag.png",
    capacity: "500 kg - 2000 kg",
    capacityNote: { tr: "(Talebe ve ihtiyaca göre özel üretim)", en: "(Customized according to requirements)" },
    desc: {
      tr: "Dört adet dayanıklı kaldırma kolonuna sahip, dökme malzemelerin güvenle depolanması ve taşınması için üretilen standart sanayi tipi ambalajdır.",
      en: "A standard industrial bulk bag equipped with 4 durable lifting loops, engineered for the safe storage and handling of dry bulk materials."
    },
    usage: {
      tr: "İnşaat malzemeleri, kum, çakıl, tarım ürünleri, tohum, tahıl, gübre ve kimyasal hammaddelerin güvenli taşınması.",
      en: "Construction materials, sand, gravel, agricultural crops, seeds, grains, fertilizers, and industrial chemicals."
    },
    features: [
      { tr: "Yırtılma ve patlamaya dirençli Polipropilen (PP) dokuma kumaş", en: "Tear-resistant Polypropylene (PP) woven fabric" },
      { tr: "Güneş ışınlarına karşı UV katkılı koruma", en: "UV-stabilized protection against weathering" },
      { tr: "Hızlı doldurma ve boşaltma bacası seçenekleri", en: "Rapid filling and discharge spout options" }
    ]
  },
  {
    slug: "q-bag",
    title: { tr: "Q-Bag (Baffle) Big Bag", en: "Q-Bag (Baffle Bag)" },
    image: "public/images/Q-bag.png",
    capacity: "1000 kg - 2000 kg",
    capacityNote: { tr: "(Talebe ve ihtiyaca göre özel üretim)", en: "(Custom production upon request)" },
    desc: {
      tr: "İç köşelerinde hava geçirgenlikli kumaş paneller (baffle) bulunan, dolum sonrasında dışa doğru bombe yapmayarak kübik/kare formunu koruyan özel endüstriyel ambalajdır.",
      en: "Specialized industrial packaging with air-permeable baffle panels, maintaining its cubic form without bulging outwards."
    },
    usage: {
      tr: "Konteyner ve tır taşımacılığı, kimyasal granüller, plastik hammadde, tohum, tahıl, kahve ve hassas ürünler.",
      en: "Container and truck freight, chemical granules, plastic resins, seeds, grains, coffee, and sensitive products."
    },
    features: [
      { tr: "İç baffle perdeleri sayesinde silindirleşmez, küp şeklini %100 korur.", en: "Maintains 100% cubic shape without rounding out via internal baffles." },
      { tr: "Standart çuvallara göre nakliye ve depolamada %20 - %25 hacim tasarrufu sağlar.", en: "Saves 20% - 25% shipping and warehouse storage space." },
      { tr: "Üst üste istiflemede ve konteyner içi yüklemelerde devrilmeyi önler.", en: "Prevents toppling during container freight stacking." }
    ]
  },
  {
    slug: "ic-naylonlu",
    title: { tr: "İç Naylonlu (PE Liner) Big Bag", en: "PE Liner Big Bag" },
    image: "public/images/iç-naylonlu-big-bag.png",
    capacity: "500 kg - 1500 kg",
    capacityNote: { tr: "(Talebe ve yoğunluğa göre özel üretim)", en: "(Custom production based on demand and density)" },
    desc: {
      tr: "Polipropilen dış dokuma çuvalın içerisine polietilen (PE) liner yerleştirilerek neme, suya ve tozumaya karşı tam sızdırmazlık sağlayan torbadır.",
      en: "Manufactured by inserting a polyethylene (PE) liner inside a woven bag for complete barrier against moisture, water, and dusting."
    },
    usage: {
      tr: "İnce mikronlu kimyasal tozlar, çimento, kireç, gıda ürünleri (un, nişasta, şeker) ve nemden etkilenen hammaddeler.",
      en: "Fine micron chemical powders, cement, lime, food products (flour, starch, sugar), and moisture-sensitive goods."
    },
    features: [
      { tr: "%100 nem, hava ve su bariyeri sağlayan yüksek kaliteli polietilen iç naylon.", en: "High-quality polyethylene internal liner providing 100% barrier against moisture." },
      { tr: "İnce toz taneciklerinin dikiş gözeneklerinden dışarı sızmasını kesin olarak engeller.", en: "Strictly prevents fine dust particles from leaking out through stitching pores." },
      { tr: "İsteğe bağlı olarak dikişle sabitlemeli (tabbed), yapıştırmalı veya serbest seçenekler.", en: "Optional tabbed (stitched), glued, or loose internal liner options." }
    ]
  },
  {
    slug: "capraz-kulplu",
    title: { tr: "Çapraz Kulplu (Cross Corner) Big Bag", en: "Cross Corner Loop Big Bag" },
    image: "public/images/çapraz-kuplu-big-bag.png",
    capacity: "1000 kg - 2000 kg",
    capacityNote: { tr: "(Ağır sanayi şartlarına uygun özel üretim)", en: "(Custom production suitable for heavy industrial conditions)" },
    desc: {
      tr: "Kaldırma kolonları gövde köşelerine çapraz monte edilen ve dairesel kumaştan dikişsiz üretilen ağır hizmet torbasıdır.",
      en: "Heavy-duty bag manufactured from circular tubular fabric with lifting loops cross-stitched to the body corners."
    },
    usage: {
      tr: "Maden cevherleri, metal tozları, ferroalyaj, refrakter malzemeler, gübre ve forklift operasyonları.",
      en: "Mineral ores, metal powders, ferroalloys, refractory materials, fertilizers, and intensive forklift sites."
    },
    features: [
      { tr: "Kolonlar sürekli açık ve dik durur; forklift bıçakları insan gücüne gerek kalmadan girer.", en: "Loops remain permanently open and upright for direct forklift tine entry." },
      { tr: "Yuvarlak (tubüler) dokuma sayesinde dikey dikiş yoktur, patlama riski sıfıra yakındır.", en: "Seamless circular weaving eliminates vertical seams, reducing burst risk to near zero." },
      { tr: "Liman ve şantiye ortamlarında hızlı yükleme ile zaman kazandırır.", en: "Saves critical time in rapid port and site handling operations." }
    ]
  }
];