import React from 'react';
import { Building2, BookOpen, Globe, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    { icon: Building2, name: t('partners.university') },
    { icon: BookOpen, name: t('partners.council') },
    { icon: Globe, name: t('partners.alliance') },
    { icon: Briefcase, name: t('partners.institute') },
  ];

  return (
    <section className="py-16 bg-white border-t border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('partners.title')}</h3>
          <p className="text-gray-600">{t('partners.description')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors group"
              >
                <Icon size={48} className="text-gray-400 group-hover:text-purple-700 transition-colors mb-3" />
                <span className="text-sm font-medium text-gray-700 text-center">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
