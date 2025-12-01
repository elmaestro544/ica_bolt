import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/generated-image (47).PNG"
                alt="I am Certified Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">I am Certified</h3>
                <p className="text-xs text-gray-400">Educational Agency</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students worldwide with quality education and expert guidance for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-amber-200 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-amber-200 transition-colors">Programs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">University Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">Language Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">Professional Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">Study Abroad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Learning District, ED 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">info@iamcertified.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} I am Certified Educational Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-200 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
