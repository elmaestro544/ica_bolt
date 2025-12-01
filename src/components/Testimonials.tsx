import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'University Student',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The university preparation program helped me secure admission to my dream university. The instructors were incredibly supportive and knowledgeable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Professional',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The professional development courses transformed my career. I gained practical skills that I use every day in my work.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'International Student',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The study abroad consulting service was exceptional. They guided me through every step and made my dream of studying overseas a reality.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      role: 'Language Learner',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'I improved my English proficiency significantly in just 6 months. The teaching methods are effective and engaging.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('testimonials.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title1')} <span className="text-purple-700">{t('testimonials.title2')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16">
            <div className="absolute top-8 left-8 rtl:right-8 rtl:left-auto text-purple-700 opacity-20">
              <Quote size={64} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-purple-700"
                />
                <div className="text-center md:text-left rtl:md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-3">{testimonials[currentIndex].role}</p>
                  <div className="flex justify-center md:justify-start rtl:md:justify-end space-x-1 rtl:space-x-reverse">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed italic text-center md:text-left rtl:md:text-right">
                "{testimonials[currentIndex].content}"
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-3 rounded-full hover:from-purple-800 hover:to-blue-800 transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-purple-700 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-3 rounded-full hover:from-purple-800 hover:to-blue-800 transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
