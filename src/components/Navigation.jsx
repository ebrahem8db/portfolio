import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
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
    { label: t.nav.home, href: '/' },
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
        padding: '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.8)',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid rgba(212, 175, 55, 0.1)',
        transition: 'all 0.3s ease'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/logo.png" 
            alt="Ebrahem Logo" 
            style={{ 
              height: '45px', 
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
              <ChevronDown size={14} style={{ 
                transform: langDropdown ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s'
              }} />
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
                backdropFilter: 'blur(10px)'
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
                    fontSize: '0.85rem',
                    transition: 'all 0.2s'
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
                    transition: 'all 0.2s',
                    borderTop: '1px solid rgba(212, 175, 55, 0.1)'
                  }}
                >
                  🇸🇦 العربية
                </button>
              </div>
            )}
          </div>
        </div>

        <button 
          className="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(5, 5, 5, 0.98)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          paddingTop: '80px'
        }}>
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                color: isActive(item.href) ? '#D4AF37' : 'white',
                background: 'none',
                border: 'none',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: isActive(item.href) ? '700' : '400',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              {item.label}
            </button>
          ))}
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={() => {
                if (lang !== 'en') toggleLang()
                setIsOpen(false)
              }}
              style={{
                padding: '0.5rem 1rem',
                border: lang === 'en' ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.3)',
                background: lang === 'en' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                color: lang === 'en' ? '#D4AF37' : 'white',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              EN
            </button>
            <button
              onClick={() => {
                if (lang !== 'ar') toggleLang()
                setIsOpen(false)
              }}
              style={{
                padding: '0.5rem 1rem',
                border: lang === 'ar' ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.3)',
                background: lang === 'ar' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                color: lang === 'ar' ? '#D4AF37' : 'white',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              عربي
            </button>
          </div>
        </div>
      )}
    </>
  )
}