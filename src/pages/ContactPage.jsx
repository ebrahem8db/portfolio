import { useState } from 'react'
import { Mail, MapPin, Send, Phone, Camera, Globe } from 'lucide-react'
import { useLanguage } from '../components/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ebrahem@example.com' },
    { icon: Phone, label: 'Phone', value: '+963 988 643 661' },
    { icon: MapPin, label: 'Location', value: 'Syria / Remote Worldwide' },
  ]

  const socials = [
    { icon: Camera, label: 'Instagram', href: 'https://www.instagram.com/ebrahem.db?igsh=MTZmN291b2NwdW8z' },
    { icon: Globe, label: 'Website', href: '#' },
  ]

  return (
    <main style={{ paddingTop: '2rem', minHeight: '100vh' }}>
      <section style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#D4AF37', marginBottom: '1rem' }}>
          {t.nav.contact}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
          {t.contact.subtitle}
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          <div>
            <h3 style={{ color: '#D4AF37', marginBottom: '2rem', fontSize: '1.5rem' }}>
              {t.contact.getInTouch}
            </h3>
            
            {contactInfo.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(20, 15, 5, 0.5)',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.15)'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon size={20} color="#D4AF37" />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{item.label}</p>
                  <p style={{ color: 'white', fontWeight: '500' }}>{item.value}</p>
                </div>
              </div>
            ))}

            <h4 style={{ color: '#D4AF37', marginTop: '2rem', marginBottom: '1rem' }}>Follow Me</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socials.map((social, i) => (
                <a key={i} href={social.href} style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#D4AF37'
                  e.currentTarget.style.borderColor = '#D4AF37'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                }}
                >
                  <social.icon size={20} color="white" />
                </a>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(20, 15, 5, 0.5)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h3 style={{ color: '#D4AF37', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
              {t.contact.sendMessage}
            </h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea
                placeholder={t.contact.messagePlaceholder}
                rows="5"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
                style={{ resize: 'vertical' }}
              />
              <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Send size={18} />
                {submitted ? t.contact.sent : t.contact.sendBtn}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        marginTop: '5rem'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>{t.footer.rights}</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          {t.footer.madeWith}
        </p>
      </footer>
    </main>
  )
}