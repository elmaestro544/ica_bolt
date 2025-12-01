import React from 'react';
import { CheckCircle, Users, Award, Clock, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('why.expertInstructors'),
      description: t('why.expertInstructorsDesc')
    },
    {
      icon: Award,
      title: t('why.accredited'),
      description: t('why.accreditedDesc')
    },
    {
      icon: Clock,
      title: t('why.flexible'),
      description: t('why.flexibleDesc')
    },
    {
      icon: TrendingUp,
      title: t('why.results'),
      description: t('why.resultsDesc')
    },
    {
      icon: Shield,
      title: t('why.quality'),
      description: t('why.qualityDesc')
    },
    {
      icon: CheckCircle,
      title: t('why.support'),
      description: t('why.supportDesc')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-700 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-300 to-yellow-300 text-purple-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('why.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('why.title1')} <span className="text-amber-300">{t('why.title2')}</span>
          </h2>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            {t('why.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-r from-amber-300 to-yellow-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-purple-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-100 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-300 mb-2">15+</div>
              <div className="text-purple-100">{t('why.yearsExp')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-300 mb-2">5000+</div>
              <div className="text-purple-100">{t('why.successfulStudents')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-300 mb-2">50+</div>
              <div className="text-purple-100">{t('why.programsOffered')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-300 mb-2">98%</div>
              <div className="text-purple-100">{t('hero.successRate')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
