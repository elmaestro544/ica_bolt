import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    'header.phone': '+1 (234) 567-890',
    'header.email': 'info@iamcertified.com',
    'header.tagline': 'Excellence in Education',
    'header.agency': 'Educational Agency',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.programs': 'Programs',
    'nav.contact': 'Contact',
    'header.getStarted': 'Get Started',

    'hero.badge': 'Building Tomorrow\'s Leaders',
    'hero.title1': 'Empowering Students Through',
    'hero.title2': 'Quality Education',
    'hero.description': 'Transform your future with our comprehensive educational programs, expert guidance, and proven track record of success.',
    'hero.startJourney': 'Start Your Journey',
    'hero.explorePrograms': 'Explore Programs',
    'hero.students': 'Students',
    'hero.programs': 'Programs',
    'hero.years': 'Years',
    'hero.successRate': 'Success Rate',

    'about.badge': 'About Us',
    'about.title1': 'Leading the Way in',
    'about.title2': 'Educational Excellence',
    'about.description1': 'With over 15 years of experience, we\'ve been at the forefront of educational innovation, helping thousands of students achieve their dreams through personalized learning paths and expert guidance.',
    'about.description2': 'Our team of dedicated professionals works tirelessly to ensure every student receives the support, resources, and opportunities they need to excel in their academic and professional pursuits.',
    'about.quote': 'Education is the most powerful weapon you can use to change the world.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To provide world-class educational services that empower students to reach their full potential and become confident, capable leaders in their chosen fields.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the most trusted and innovative educational agency, recognized globally for excellence in student development and academic achievement.',
    'about.values': 'Our Values',
    'about.valuesText': 'Excellence, integrity, innovation, and student-centered approach guide everything we do, ensuring the best outcomes for every learner.',

    'programs.badge': 'Our Programs',
    'programs.title1': 'Comprehensive Educational',
    'programs.title2': 'Solutions',
    'programs.description': 'Explore our wide range of programs designed to meet diverse educational needs and help you achieve your goals.',
    'programs.universityPrep': 'University Preparation',
    'programs.universityPrepDesc': 'Comprehensive programs to prepare students for university entrance exams and admissions.',
    'programs.language': 'Language Training',
    'programs.languageDesc': 'Expert language courses including English, Arabic, and other major international languages.',
    'programs.professional': 'Professional Development',
    'programs.professionalDesc': 'Career-focused training programs designed to enhance professional skills and competencies.',
    'programs.studyAbroad': 'Study Abroad Consulting',
    'programs.studyAbroadDesc': 'Guidance and support for students seeking international education opportunities.',
    'programs.corporate': 'Corporate Training',
    'programs.corporateDesc': 'Customized training solutions for businesses to upskill their workforce.',
    'programs.tutoring': 'Academic Tutoring',
    'programs.tutoringDesc': 'One-on-one and group tutoring sessions across all subjects and grade levels.',
    'programs.learnMore': 'Learn More',

    'why.badge': 'Why Choose Us',
    'why.title1': 'Your Success is Our',
    'why.title2': 'Priority',
    'why.description': 'We stand out from the competition with our commitment to excellence, innovation, and student success.',
    'why.expertInstructors': 'Expert Instructors',
    'why.expertInstructorsDesc': 'Learn from industry professionals with years of teaching experience',
    'why.accredited': 'Accredited Programs',
    'why.accreditedDesc': 'All our courses are internationally recognized and accredited',
    'why.flexible': 'Flexible Scheduling',
    'why.flexibleDesc': 'Choose from morning, evening, and weekend classes to fit your lifestyle',
    'why.results': 'Proven Results',
    'why.resultsDesc': '98% success rate with thousands of satisfied students',
    'why.quality': 'Quality Assurance',
    'why.qualityDesc': 'Continuous monitoring and improvement of our teaching methods',
    'why.support': 'Student Support',
    'why.supportDesc': '24/7 support system to help you succeed in your learning journey',
    'why.yearsExp': 'Years Experience',
    'why.successfulStudents': 'Successful Students',
    'why.programsOffered': 'Programs Offered',

    'testimonials.badge': 'Testimonials',
    'testimonials.title1': 'What Our Students',
    'testimonials.title2': 'Say',
    'testimonials.description': 'Don\'t just take our word for it. Hear from the thousands of students who have transformed their lives through our programs.',

    'partners.title': 'Trusted By Leading Organizations',
    'partners.description': 'Our partnerships ensure the highest quality education and global recognition',
    'partners.university': 'Global University Network',
    'partners.council': 'International Education Council',
    'partners.alliance': 'World Education Alliance',
    'partners.institute': 'Professional Training Institute',

    'contact.badge': 'Contact Us',
    'contact.title1': 'Get in',
    'contact.title2': 'Touch',
    'contact.description': 'Ready to start your educational journey? Reach out to us and we\'ll help you find the perfect program.',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.addressLine1': '123 Education Street',
    'contact.addressLine2': 'Learning District, ED 12345',
    'contact.officeHours': 'Office Hours',
    'contact.mondayFriday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.closed': 'Closed',
    'contact.sendMessage': 'Send us a Message',
    'contact.thankYou': 'Thank You!',
    'contact.messageSent': 'Your message has been sent successfully. We\'ll get back to you soon.',
    'contact.fullName': 'Full Name',
    'contact.emailAddress': 'Email Address',
    'contact.phoneNumber': 'Phone Number',
    'contact.programInterest': 'Program of Interest',
    'contact.selectProgram': 'Select a program',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your educational goals...',
    'contact.send': 'Send Message',

    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': 'I am Certified Educational Agency. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
  },
  ar: {
    'header.phone': '٨٩٠-٥٦٧-٢٣٤-١+',
    'header.email': 'info@iamcertified.com',
    'header.tagline': 'التميز في التعليم',
    'header.agency': 'وكالة تعليمية',
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.programs': 'البرامج',
    'nav.contact': 'اتصل بنا',
    'header.getStarted': 'ابدأ الآن',

    'hero.badge': 'بناء قادة الغد',
    'hero.title1': 'تمكين الطلاب من خلال',
    'hero.title2': 'تعليم عالي الجودة',
    'hero.description': 'حوّل مستقبلك مع برامجنا التعليمية الشاملة، والتوجيه المتخصص، وسجلنا الحافل بالنجاح.',
    'hero.startJourney': 'ابدأ رحلتك',
    'hero.explorePrograms': 'استكشف البرامج',
    'hero.students': 'طالب',
    'hero.programs': 'برنامج',
    'hero.years': 'سنة',
    'hero.successRate': 'معدل النجاح',

    'about.badge': 'من نحن',
    'about.title1': 'نقود الطريق في',
    'about.title2': 'التميز التعليمي',
    'about.description1': 'مع أكثر من 15 عامًا من الخبرة، كنا في طليعة الابتكار التعليمي، مساعدة آلاف الطلاب على تحقيق أحلامهم من خلال مسارات التعلم الشخصية والتوجيه المتخصص.',
    'about.description2': 'يعمل فريقنا من المحترفين المتفانين بلا كلل لضمان حصول كل طالب على الدعم والموارد والفرص التي يحتاجونها للتفوق في مساعيهم الأكاديمية والمهنية.',
    'about.quote': 'التعليم هو السلاح الأقوى الذي يمكنك استخدامه لتغيير العالم.',
    'about.mission': 'مهمتنا',
    'about.missionText': 'تقديم خدمات تعليمية عالمية المستوى تمكن الطلاب من الوصول إلى إمكاناتهم الكاملة وأن يصبحوا قادة واثقين وقادرين في المجالات التي يختارونها.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نكون الوكالة التعليمية الأكثر ثقة وابتكارًا، معترف بها عالميًا للتميز في تطوير الطلاب والإنجاز الأكاديمي.',
    'about.values': 'قيمنا',
    'about.valuesText': 'التميز والنزاهة والابتكار والنهج المتمحور حول الطالب يوجه كل ما نقوم به، مما يضمن أفضل النتائج لكل متعلم.',

    'programs.badge': 'برامجنا',
    'programs.title1': 'حلول تعليمية',
    'programs.title2': 'شاملة',
    'programs.description': 'استكشف مجموعتنا الواسعة من البرامج المصممة لتلبية الاحتياجات التعليمية المتنوعة ومساعدتك على تحقيق أهدافك.',
    'programs.universityPrep': 'التحضير للجامعة',
    'programs.universityPrepDesc': 'برامج شاملة لإعداد الطلاب لامتحانات القبول الجامعي والقبول.',
    'programs.language': 'التدريب اللغوي',
    'programs.languageDesc': 'دورات لغوية متخصصة تشمل الإنجليزية والعربية واللغات الدولية الرئيسية الأخرى.',
    'programs.professional': 'التطوير المهني',
    'programs.professionalDesc': 'برامج تدريبية تركز على المهنة مصممة لتعزيز المهارات والكفاءات المهنية.',
    'programs.studyAbroad': 'استشارات الدراسة بالخارج',
    'programs.studyAbroadDesc': 'التوجيه والدعم للطلاب الذين يسعون للحصول على فرص التعليم الدولي.',
    'programs.corporate': 'التدريب المؤسسي',
    'programs.corporateDesc': 'حلول تدريبية مخصصة للشركات لتطوير مهارات القوى العاملة لديها.',
    'programs.tutoring': 'الدروس الخصوصية الأكاديمية',
    'programs.tutoringDesc': 'جلسات تعليمية فردية وجماعية في جميع المواد والمستويات الدراسية.',
    'programs.learnMore': 'اعرف المزيد',

    'why.badge': 'لماذا نحن',
    'why.title1': 'نجاحك هو',
    'why.title2': 'أولويتنا',
    'why.description': 'نتميز عن المنافسة بالتزامنا بالتميز والابتكار ونجاح الطلاب.',
    'why.expertInstructors': 'مدربون خبراء',
    'why.expertInstructorsDesc': 'تعلم من محترفين في الصناعة بسنوات من الخبرة التدريسية',
    'why.accredited': 'برامج معتمدة',
    'why.accreditedDesc': 'جميع دوراتنا معترف بها ومعتمدة دوليًا',
    'why.flexible': 'جدولة مرنة',
    'why.flexibleDesc': 'اختر من الفصول الصباحية والمسائية وعطلة نهاية الأسبوع لتناسب نمط حياتك',
    'why.results': 'نتائج مثبتة',
    'why.resultsDesc': 'معدل نجاح 98٪ مع آلاف الطلاب الراضين',
    'why.quality': 'ضمان الجودة',
    'why.qualityDesc': 'المراقبة والتحسين المستمر لطرق التدريس لدينا',
    'why.support': 'دعم الطلاب',
    'why.supportDesc': 'نظام دعم على مدار الساعة لمساعدتك على النجاح في رحلتك التعليمية',
    'why.yearsExp': 'سنوات من الخبرة',
    'why.successfulStudents': 'طالب ناجح',
    'why.programsOffered': 'برنامج مقدم',

    'testimonials.badge': 'آراء الطلاب',
    'testimonials.title1': 'ماذا يقول',
    'testimonials.title2': 'طلابنا',
    'testimonials.description': 'لا تأخذ كلامنا فقط. استمع من آلاف الطلاب الذين غيروا حياتهم من خلال برامجنا.',

    'partners.title': 'موثوق به من قبل المنظمات الرائدة',
    'partners.description': 'شراكاتنا تضمن أعلى جودة للتعليم والاعتراف العالمي',
    'partners.university': 'شبكة الجامعات العالمية',
    'partners.council': 'المجلس الدولي للتعليم',
    'partners.alliance': 'التحالف التعليمي العالمي',
    'partners.institute': 'معهد التدريب المهني',

    'contact.badge': 'اتصل بنا',
    'contact.title1': 'ابقى على',
    'contact.title2': 'تواصل',
    'contact.description': 'مستعد لبدء رحلتك التعليمية؟ تواصل معنا وسنساعدك في العثور على البرنامج المثالي.',
    'contact.info': 'معلومات الاتصال',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.addressLine1': '١٢٣ شارع التعليم',
    'contact.addressLine2': 'منطقة التعلم، ED 12345',
    'contact.officeHours': 'ساعات العمل',
    'contact.mondayFriday': 'الاثنين - الجمعة',
    'contact.saturday': 'السبت',
    'contact.sunday': 'الأحد',
    'contact.closed': 'مغلق',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.thankYou': 'شكرًا لك!',
    'contact.messageSent': 'تم إرسال رسالتك بنجاح. سنعود إليك قريبًا.',
    'contact.fullName': 'الاسم الكامل',
    'contact.emailAddress': 'عنوان البريد الإلكتروني',
    'contact.phoneNumber': 'رقم الهاتف',
    'contact.programInterest': 'البرنامج المهتم به',
    'contact.selectProgram': 'اختر برنامجًا',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'أخبرنا عن أهدافك التعليمية...',
    'contact.send': 'إرسال الرسالة',

    'footer.quickLinks': 'روابط سريعة',
    'footer.programs': 'البرامج',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.copyright': 'وكالة I am Certified التعليمية. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
  }
};
