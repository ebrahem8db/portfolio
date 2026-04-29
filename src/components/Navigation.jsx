import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from './LanguageContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, lang, toggleLang } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const handleNavClick = (href) => {
    setIsOpen(false)
    
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: t.nav.portfolio, href: '/portfolio' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.contact, href: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname === path
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, right: 0, left: 0,
        padding: '0.8rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.8)',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid rgba(212, 175, 55, 0.1)',
        transition: 'all 0.3s ease'
      }}>
        {/* Logo - Click to go Home */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', zIndex: 102 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/logo.png" 
            alt="Ebrahem Logo" 
            style={{ 
              height: '40px', 
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))'
            }} 
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          <span style={{
            display: 'none',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#D4AF37',
            letterSpacing: '2px'
          }}>
            EB
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map(item => {
            const active = isActive(item.href)
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  color: active ? '#D4AF37' : 'white',
                  background: 'none',
                  border: 'none',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s',
                  fontWeight: active ? '600' : '400',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={e => !active && (e.target.style.color = '#D4AF37')}
                onMouseLeave={e => !active && (e.target.style.color = 'white')}
              >
                {item.label}
              </button>
            )
          })}

          {/* Language Dropdown Desktop */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                background: 'transparent',
                color: '#D4AF37',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}
            >
              <Globe size={16} />
              {lang === 'en' ? 'EN' : 'عربي'}
            </button>

            {langDropdown && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                right: 0,
                background: 'rgba(10, 10, 10, 0.95)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                overflow: 'hidden',
                minWidth: '120px',
                backdropFilter: 'blur(10px)',
                zIndex: 200
              }}>
                <button
                  onClick={() => {
                    if (lang !== 'en') toggleLang()
                    setLangDropdown(false)
                  }}
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    background: lang === 'en' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                    border: 'none',
                    color: lang === 'en' ? '#D4AF37' : 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.85rem'
                  }}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => {
                    if (lang !== 'ar') toggleLang()
                    setLangDropdown(false)
                  }}
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    background: lang === 'ar' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                    border: 'none',
                    color: lang === 'ar' ? '#D4AF37' : 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    borderTop: '1px solid rgba(212, 175, 55, 0.1)'
                  }}
                >
                  🇸🇦 العربية
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'white', 
            cursor: 'pointer',
            zIndex: 102,
            padding: '0.5rem'
          }}
        >
          {isOpen ? <X size={24} color="#D4AF37" /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Side Slide Menu */}
      <div 
        className="mobile-side-menu"
        style={{
          position: 'fixed',
          top: 0,
          [lang === 'ar' ? 'left' : 'right']: 0,
          width: '280px',
          height: '100vh',
          background: 'rgba(5, 5, 5, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 101,
          transform: isOpen ? 'translateX(0)' : `translateX(${lang === 'ar' ? '-100%' : '100%'})`,
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '6rem 2rem 2rem',
          borderLeft: lang === 'ar' ? 'none' : '1px solid rgba(212, 175, 55, 0.2)',
          borderRight: lang === 'ar' ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '1.5rem',
            [lang === 'ar' ? 'left' : 'right']: '1.5rem',
            background: 'none',
            border: 'none',
            color: '#D4AF37',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                color: isActive(item.href) ? '#D4AF37' : 'white',
                background: 'none',
                border: 'none',
                textDecoration: 'none',
                fontSize: '1.3rem',
                fontWeight: isActive(item.href) ? '700' : '400',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textAlign: lang === 'ar' ? 'right' : 'left',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                transition: 'color 0.3s'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Language / اللغة
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => {
                if (lang !== 'en') toggleLang()
                setIsOpen(false)
              }}
              style={{
                flex: 1,
                padding: '0.8rem',
                border: lang === 'en' ? '2px solid #D4AF37' : '1px solid rgba(255,255,255,0.3)',
                background: lang === 'en' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                color: lang === 'en' ? '#D4AF37' : 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: lang === 'en' ? '600' : '400'
              }}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => {
                if (lang !== 'ar') toggleLang()
                setIsOpen(false)
              }}
              style={{
                flex: 1,
                padding: '0.8rem',
                border: lang === 'ar' ? '2px solid #D4AF37' : '1px solid rgba(255,255,255,0.3)',
                background: lang === 'ar' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                color: lang === 'ar' ? '#D4AF37' : 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: lang === 'ar' ? '600' : '400'
              }}
            >
              🇸🇦 العربية
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 100,
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.3s'
          }}
        />
      )}
    </>
  )
}