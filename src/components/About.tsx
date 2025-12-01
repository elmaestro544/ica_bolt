import React from 'react';
import { Target, Eye, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              {t('about.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('about.title1')} <span className="text-purple-700">{t('about.title2')}</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Educational environment"
              className="rounded-3xl shadow-xl w-full h-96 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800";
              }}
            />
            <div className="absolute -bottom-6 -left-6 rtl:-right-6 rtl:left-auto bg-gradient-to-r from-purple-700 to-blue-700 text-white p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm font-medium">
                "{t('about.quote')}"
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target size={32} className="text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.values')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.valuesText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
