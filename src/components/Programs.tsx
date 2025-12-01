import React from 'react';
import { BookOpen, Globe, Briefcase, Brain, Languages, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Programs: React.FC = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: GraduationCap,
      title: t('programs.universityPrep'),
      description: t('programs.universityPrepDesc'),
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50'
    },
    {
      icon: Languages,
      title: t('programs.language'),
      description: t('programs.languageDesc'),
      color: 'bg-green-500',
      lightColor: 'bg-green-50'
    },
    {
      icon: Brain,
      title: t('programs.professional'),
      description: t('programs.professionalDesc'),
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50'
    },
    {
      icon: Globe,
      title: t('programs.studyAbroad'),
      description: t('programs.studyAbroadDesc'),
      color: 'bg-teal-500',
      lightColor: 'bg-teal-50'
    },
    {
      icon: Briefcase,
      title: t('programs.corporate'),
      description: t('programs.corporateDesc'),
      color: 'bg-red-500',
      lightColor: 'bg-red-50'
    },
    {
      icon: BookOpen,
      title: t('programs.tutoring'),
      description: t('programs.tutoringDesc'),
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('programs.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('programs.title1')} <span className="text-purple-700">{t('programs.title2')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('programs.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`${program.lightColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className={`text-${program.color.split('-')[1]}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
                <button className="mt-6 text-purple-700 font-semibold flex items-center space-x-2 rtl:space-x-reverse group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
                  <span>{t('programs.learnMore')}</span>
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
