import { useEffect, useRef } from 'react'
import { useLanguage } from './LanguageContext'

export default function HeroSection() {
  const titleRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const titles = ['Developer', 'Designer', 'Creator']
    let index = 0
    
    const interval = setInterval(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = 0
        setTimeout(() => {
          titleRef.current.textContent = titles[index]
          titleRef.current.style.opacity = 1
          index = (index + 1) % titles.length
        }, 300)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10%',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ 
          color: '#D4AF37', 
          fontSize: '0.9rem', 
          letterSpacing: '3px',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>
          {t.heroSubtitle}
        </p>
        
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '700',
          lineHeight: 1.2,
          marginBottom: '1rem'
        }}>
          {t.member}
        </h1>
        
        <div 
          ref={titleRef}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#D4AF37',
            fontWeight: '300',
            transition: 'opacity 0.3s',
            minHeight: '4rem'
          }}
        >
          Developer
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.7)',
          marginTop: '2rem',
          lineHeight: 1.8,
          maxWidth: '500px'
        }}>
          {t.heroDescription}
        </p>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}