
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// استيراد الصفحات (أو مكونات مؤقتة حتى تنشئ ملفاتها)
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* شريط التصفح العلوي */}
        <Navbar />

        {/* مسارات الصفحات المتغيرة */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          {/* رابط ديناميكي لعرض أي منتج حسب الـ slug */}
          <Route path="/urun/:slug" element={<ProductDetail />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>

        {/* الفوتر وأزرار الاتصال والواتساب العائمة */}
        <Footer />
        <FloatingButtons />
      </Router>
    </LanguageProvider>
  );
}