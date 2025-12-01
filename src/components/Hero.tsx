import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-gradient-to-r from-amber-300 to-yellow-300 text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero.title1')}
              <span className="text-amber-300"> {t('hero.title2')}</span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-amber-400 to-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg"
              >
                <span>{t('hero.startJourney')}</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('programs');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all"
              >
                {t('hero.explorePrograms')}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-2 inline-block">
                  <Users size={32} className="text-amber-300" />
                </div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-purple-100">{t('hero.students')}</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-2 inline-block">
                  <BookOpen size={32} className="text-amber-300" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-purple-100">{t('hero.programs')}</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-2 inline-block">
                  <Award size={32} className="text-amber-300" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-purple-100">{t('hero.years')}</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students learning"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 rtl:-left-6 rtl:right-auto bg-gradient-to-r from-amber-400 to-yellow-400 text-purple-900 p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm font-semibold">{t('hero.successRate')}</div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 -right-10 rtl:-left-10 rtl:right-auto w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
