import { Code, Palette, Globe, Smartphone, Database, Sparkles, Cpu, Shield } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const icons = [Code, Palette, Globe, Smartphone, Database, Sparkles, Cpu, Shield]

export default function ServicesSection() {
  const { t } = useLanguage()
  const services = [
    t.services.webDev,
    t.services.uiux,
    t.services.webApps,
    t.services.mobile,
    t.services.backend,
    t.services.effects,
    { title: 'Hardware Solutions', desc: 'PC assembly, troubleshooting & maintenance' },
    { title: 'Technical Training', desc: 'Programming courses for beginners & children' },
  ]

  return (
    <section id="services" style={{ padding: '5rem 2rem' }}>
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        marginBottom: '1rem',
        color: '#D4AF37'
      }}>
        {t.services.title}
      </h2>
      <p style={{ 
        textAlign: 'center', 
        color: 'rgba(255,255,255,0.6)', 
        marginBottom: '3rem'
      }}>
        Comprehensive solutions for your digital needs
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {services.map((service, i) => {
          const Icon = icons[i]
          return (
            <div key={i} style={{
              background: 'rgba(20, 15, 5, 0.6)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#D4AF37'
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(212, 175, 55, 0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <Icon size={40} color="#D4AF37" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'white' }}>{service.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {service.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}