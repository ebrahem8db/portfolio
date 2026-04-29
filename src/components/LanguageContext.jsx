import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    teamName: '[Brand Name]',
    member: 'Ebrahem',
    heroSubtitle: 'Creative Developer & Designer',
    heroDescription: 'I design and develop exceptional digital experiences. From interactive websites to complex applications, I turn ideas into reality.',
    nav: {
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About Me',
      contact: 'Contact'
    },
    contactBtn: 'Contact Me',
    services: {
      title: 'My Services',
      subtitle: 'Comprehensive solutions for your digital needs',
      webDev: { title: 'Web Development', desc: 'Interactive websites using React & Next.js' },
      uiux: { title: 'UI/UX Design', desc: 'Modern designs focused on user experience' },
      webApps: { title: 'Web Applications', desc: 'Complex and integrated applications' },
      mobile: { title: 'Mobile Apps', desc: 'React Native applications' },
      backend: { title: 'Backend', desc: 'Node.js, Python, APIs' },
      effects: { title: '3D Effects', desc: 'Three.js, WebGL, Animations' },
      hardware: { title: 'Hardware Solutions', desc: 'PC assembly, troubleshooting & maintenance' },
      training: { title: 'Technical Training', desc: 'Programming courses for beginners & children' }
    },
    tech: {
      title: 'Technologies I Use',
      subtitle: 'My technical toolkit for building modern applications'
    },
    about: {
      title: 'About Me',
      name: 'Ebrahem Al-Diab',
      role: 'Information Engineering Student & Developer',
      summary: 'Highly motivated second-year Information Engineering student at Al-Jazeera Private University. Passionate about software development with practical experience in multiple programming languages and web technologies.',
      education: {
        title: 'Education',
        university: 'Al-Jazeera Private University, Syria',
        major: 'Information Engineering - Second Year (Enrolled 2024)'
      },
      skills: {
        title: 'Technical Skills',
        languages: 'C++, Dart, Kotlin, Java, Python, HTML, CSS, JavaScript',
        tools: 'Visual Studio Code, Android Studio, Git',
        concepts: 'OOP, Algorithm Design, Android Development, PC Assembly & Maintenance'
      },
      experience: {
        title: 'Experience',
        volunteer: 'Hazihi Hayati Voluntary Group - Rif Damascus Team (1 Year)',
        instructor: 'Programming Instructor - C++ for Children'
      },
      certifications: {
        title: 'Certifications',
        list: [
          'Google IT Support Professional Certificate (Coursera)',
          'C++ Programming Fundamentals',
          'Dart Programming Language',
          'Kotlin for Android Development',
          'Computer Hardware & Maintenance'
        ]
      },
      traits: {
        title: 'Personal Traits',
        list: 'Fast learner, Self-motivated, Strong communication, Team player, Problem solver'
      }
    },
    portfolio: {
      title: 'My Projects',
      subtitle: 'A collection of my work showcasing various skills and technologies',
      demosTitle: 'Interactive Demos',
      demosSubtitle: 'What I Can Build',
      demosDescription: 'Interactive demos showcasing my capabilities. I can create 3D experiences, games, and animated code presentations for your projects.',
      box3d: { 
        title: '3D Web Design', 
        desc: 'I can design immersive 3D websites using Three.js and WebGL. This demo shows interactive 3D models with real-time rendering.' 
      },
      snake: { 
        title: 'Game Development', 
        desc: 'I can build interactive games using Canvas API and JavaScript. This Snake game demonstrates real-time game logic and user input handling.' 
      },
      code: { 
        title: 'Code Animation', 
        desc: 'I can create animated code presentations with syntax highlighting. Perfect for tutorials and showcasing code skills.' 
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? Let\'s create something amazing together.',
      getInTouch: 'Get in Touch',
      sendMessage: 'Send a Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      sendBtn: 'Send Message',
      sent: 'Sent!'
    },
    footer: {
      rights: '© 2026 Ebrahem Portfolio',
      madeWith: 'Made with ❤️ and lots of ☕'
    }
  },
  ar: {
    teamName: '[اسم العلامة]',
    member: 'إبراهيم',
    heroSubtitle: 'مطور ومصمم إبداعي',
    heroDescription: 'أصمم وأطور تجارب رقمية استثنائية. من المواقع التفاعلية إلى التطبيقات المعقدة، أحول الأفكار إلى واقع.',
    nav: {
      portfolio: 'الأعمال',
      services: 'الخدمات',
      about: 'عني',
      contact: 'تواصل'
    },
    contactBtn: 'تواصل معي',
    services: {
      title: 'خدماتي',
      subtitle: 'حلول شاملة لاحتياجاتك الرقمية',
      webDev: { title: 'تطوير الويب', desc: 'مواقع تفاعلية باستخدام React و Next.js' },
      uiux: { title: 'تصميم UI/UX', desc: 'تصاميم عصرية تركز على تجربة المستخدم' },
      webApps: { title: 'تطبيقات الويب', desc: 'تطبيقات معقدة ومتكاملة' },
      mobile: { title: 'تطبيقات الموبايل', desc: 'تطبيقات React Native' },
      backend: { title: 'الـ Backend', desc: 'Node.js, Python, APIs' },
      effects: { title: 'تأثيرات 3D', desc: 'Three.js, WebGL, Animations' },
      hardware: { title: 'حلول الهاردوير', desc: 'تجميع وصيانة وتحري أعطال الحاسوب' },
      training: { title: 'تدريب تقني', desc: 'دورات برمجة للمبتدئين والأطفال' }
    },
    tech: {
      title: 'التقنيات التي أستخدمها',
      subtitle: 'أدواتي التقنية لبناء التطبيقات الحديثة'
    },
    about: {
      title: 'عني',
      name: 'إبراهيم الذياب',
      role: 'طالب هندسة المعلومات ومطور',
      summary: 'طالب متحمس في السنة الثانية من هندسة المعلومات في جامعة الجزيرة الخاصة. شغوف بتطوير البرمجيات مع خبرة عملية في لغات برمجة متعددة وتقنيات الويب.',
      education: {
        title: 'التعليم',
        university: 'جامعة الجزيرة الخاصة، سوريا',
        major: 'هندسة المعلومات - السنة الثانية (2024)'
      },
      skills: {
        title: 'المهارات التقنية',
        languages: 'C++, Dart, Kotlin, Java, Python, HTML, CSS, JavaScript',
        tools: 'Visual Studio Code, Android Studio, Git',
        concepts: 'OOP, تصميم الخوارزميات, تطوير Android, تجميع وصيانة الحاسوب'
      },
      experience: {
        title: 'الخبرة',
        volunteer: 'مجموعة هذه حياتي التطوعية - فريق ريف دمشق (سنة)',
        instructor: 'مدرب برمجة - C++ للأطفال'
      },
      certifications: {
        title: 'الشهادات',
        list: [
          'Google IT Support Professional Certificate (Coursera)',
          'أساسيات برمجة C++',
          'لغة برمجة Dart',
          'Kotlin لتطوير Android',
          'صيانة أجهزة الحاسوب'
        ]
      },
      traits: {
        title: 'الصفات الشخصية',
        list: 'سريع التعلم، متحفز ذاتياً، تواصل قوي، عمل جماعي، حل المشكلات'
      }
    },
    portfolio: {
      title: 'مشاريعي',
      subtitle: 'مجموعة من أعمالي التي تظهر مهاراتي وتقنياتي المختلفة',
      demosTitle: 'عروض تفاعلية',
      demosSubtitle: 'ما أستطيع بناؤه',
      demosDescription: 'عروض تفاعلية تظهر قدراتي. أستطيع إنشاء تجارب ثلاثية الأبعاد وألعاب وعروض أكواد متحركة لمشاريعك.',
      box3d: { 
        title: 'تصميم الويب ثلاثي الأبعاد', 
        desc: 'أستطيع تصميم مواقع 3D غامرة باستخدام Three.js و WebGL. هذا العرض التوضيحي يظهر نماذج ثلاثية الأبعاد تفاعلية مع عرض فوري.' 
      },
      snake: { 
        title: 'تطوير الألعاب', 
        desc: 'أستطيع بناء ألعاب تفاعلية باستخدام Canvas API و JavaScript. لعبة Snake هذه توضح منطق اللعبة الفوري ومعالجة إدخال المستخدم.' 
      },
      code: { 
        title: 'أنيميشن الأكواد', 
        desc: 'أستطيع إنشاء عروض أكواد متحركة مع تلوين الصياغة. مثالي للدروس التعليمية وعرض مهارات البرمجة.' 
      }
    },
    contact: {
      title: 'تواصل',
      subtitle: 'هل لديك مشروع في بالك؟ لننشئ شيئاً رائعاً معاً.',
      getInTouch: 'تواصل معي',
      sendMessage: 'أرسل رسالة',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      messagePlaceholder: 'رسالتك',
      sendBtn: 'إرسال الرسالة',
      sent: 'تم الإرسال!'
    },
    footer: {
      rights: '© 2026 إبراهيم بورتفوليو',
      madeWith: 'صنع بـ ❤️ وكثير من ☕'
    }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const t = translations[lang]

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}