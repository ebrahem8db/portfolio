import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    teamName: '[Brand Name]',
    member: 'Ebrahem',
    heroSubtitle: 'Creative Developer & Designer',
    heroDescription: 'I design and develop exceptional digital experiences. From interactive websites to complex applications, I turn ideas into reality.',
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About Me',
      contact: 'Contact'
    },
    contactBtn: 'Contact Me',
    services: {
      title: 'My Services',
      webDev: { title: 'Web Development', desc: 'Interactive websites using React & Next.js' },
      uiux: { title: 'UI/UX Design', desc: 'Modern designs focused on user experience' },
      webApps: { title: 'Web Applications', desc: 'Complex and integrated applications' },
      mobile: { title: 'Mobile Apps', desc: 'React Native applications' },
      backend: { title: 'Backend', desc: 'Node.js, Python, APIs' },
      effects: { title: '3D Effects', desc: 'Three.js, WebGL, Animations' }
    },
    about: {
      title: 'About Me',
      name: 'Ebrahem Al-Thiab',
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
      title: 'Interactive Portfolio',
      subtitle: 'Live examples of my technical capabilities',
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

    hardware: { title: 'Hardware Solutions', desc: 'PC assembly, troubleshooting & maintenance' },
    training: { title: 'Technical Training', desc: 'Programming courses for beginners & children' },

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
      home: 'الرئيسية',
      portfolio: 'الأعمال',
      services: 'الخدمات',
      about: 'عني',
      contact: 'تواصل'
    },
    contactBtn: 'تواصل معي',
    services: {
      title: 'خدماتي',
      webDev: { title: 'تطوير الويب', desc: 'مواقع تفاعلية باستخدام React و Next.js' },
      uiux: { title: 'تصميم UI/UX', desc: 'تصاميم عصرية تركز على تجربة المستخدم' },
      webApps: { title: 'تطبيقات الويب', desc: 'تطبيقات معقدة ومتكاملة' },
      mobile: { title: 'تطبيقات الموبايل', desc: 'تطبيقات React Native' },
      backend: { title: 'الـ Backend', desc: 'Node.js, Python, APIs' },
      effects: { title: 'تأثيرات 3D', desc: 'Three.js, WebGL, Animations' }
    },
    about: {
      title: 'عني',
      name: 'إبراهيم الذيب',
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
      title: 'معرض الأعمال التفاعلي',
      subtitle: 'أمثلة حية على قدراتي التقنية',
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
    hardware: { title: 'حلول الهاردوير', desc: 'تجميع وصيانة وتحري أعطال الحاسوب' },
    training: { title: 'تدريب تقني', desc: 'دورات برمجة للمبتدئين والأطفال' },
    
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