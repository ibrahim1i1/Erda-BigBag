import React, { createContext, useContext, useState, useEffect,type ReactNode } from 'react';
import {type Language } from '../types';

// واجهة الخصائص التي سيمتلكها السياق
interface LanguageContextType {
  lang: Language;
  setLang: (selectedLang: Language) => void;
}

// إنشاء السياق بقيمة افتراضية فارغة
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// مزود السياق لربط التطبيق بالكامل
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // جلب اللغة المحفوظة في localStorage، والافتراضي تركي (tr)
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred_lang') as Language;
    return saved === 'en' ? 'en' : 'tr';
  });

  // تحديث التخزين ووسم لغة الصفحة في المتصفح عند تغيير اللغة
  useEffect(() => {
    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (selectedLang: Language) => {
    setLangState(selectedLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// هوك مخصص (Custom Hook) لاستدعاء اللغة في أي مكان بسهولة
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};