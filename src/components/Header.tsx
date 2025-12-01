import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'programs', label: t('nav.programs') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:+1234567890" className="flex items-center space-x-2 rtl:space-x-reverse hover:text-amber-200 transition-colors">
              <Phone size={16} />
              <span>{t('header.phone')}</span>
            </a>
            <a href="mailto:info@iamcertified.com" className="flex items-center space-x-2 rtl:space-x-reverse hover:text-amber-200 transition-colors">
              <Mail size={16} />
              <span>{t('header.email')}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <span>{t('header.tagline')}</span>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 rtl:space-x-reverse hover:text-amber-200 transition-colors px-3 py-1 rounded-full border border-white/30 hover:border-amber-200"
            >
              <Languages size={16} />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="/generated-image (47).PNG"
                alt="I am Certified Logo"
                className="h-14 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-purple-900">I am Certified</h1>
                <p className="text-xs text-gray-600">{t('header.agency')}</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors hover:text-purple-700 ${
                    activeSection === item.id ? 'text-purple-700' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
              <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors font-medium"
                onClick={() => scrollToSection('contact')}
              >
                {t('header.getStarted')}
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left rtl:text-right text-base font-medium transition-colors hover:text-purple-700 ${
                    activeSection === item.id ? 'text-purple-700' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition-colors font-medium"
              >
                <Languages size={20} />
                <span>{language === 'en' ? 'عربي' : 'English'}</span>
              </button>
              <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors font-medium text-center"
                onClick={() => scrollToSection('contact')}
              >
                {t('header.getStarted')}
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
