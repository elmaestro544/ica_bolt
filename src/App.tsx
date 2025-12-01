import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
