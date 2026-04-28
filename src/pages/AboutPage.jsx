import { useLanguage } from '../components/LanguageContext'
import { GraduationCap, Code, Award, Users, BookOpen, Cpu } from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()
  const about = t.about

  const skills = [
    { icon: Code, label: 'Languages', value: about.skills.languages },
    { icon: Cpu, label: 'Tools', value: about.skills.tools },
    { icon: BookOpen, label: 'Concepts', value: about.skills.concepts },
  ]

  const experiences = [
    { icon: Users, title: about.experience.volunteer },
    { icon: GraduationCap, title: about.experience.instructor },
  ]

  return (
    <main style={{ paddingTop: '2rem', minHeight: '100vh' }}>
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#D4AF37', marginBottom: '1rem' }}>
          {about.title}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          {about.summary}
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        {/* Profile Card */}
        <div style={{
          background: 'rgba(20, 15, 5, 0.6)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '20px',
          padding: '3rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                overflow: 'hidden',
                border: '2px solid #D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
            }}>
            <img 
                    src="/logo2.jpeg" 
                    alt="Ebrahem"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
            }}
            />
            </div>
          <h2 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
            {about.name}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
            {about.role}
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap size={24} />
            {about.education.title}
          </h3>
          <div style={{
            background: 'rgba(20, 15, 5, 0.5)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '16px',
            padding: '1.5rem'
          }}>
            <p style={{ color: 'white', fontWeight: '600', marginBottom: '0.3rem' }}>
              {about.education.university}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              {about.education.major}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={24} />
            {about.skills.title}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {skills.map((skill, i) => (
              <div key={i} style={{
                background: 'rgba(20, 15, 5, 0.5)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <skill.icon size={22} color="#D4AF37" />
                </div>
                <div>
                  <p style={{ color: '#D4AF37', fontWeight: '600', marginBottom: '0.3rem' }}>
                    {skill.label}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                    {skill.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={24} />
            {about.experience.title}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{
                background: 'rgba(20, 15, 5, 0.5)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <exp.icon size={22} color="#D4AF37" />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {exp.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={24} />
            {about.certifications.title}
          </h3>
          <div style={{
            background: 'rgba(20, 15, 5, 0.5)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '16px',
            padding: '1.5rem'
          }}>
            {about.certifications.list.map((cert, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.7rem 0',
                borderBottom: i < about.certifications.list.length - 1 ? '1px solid rgba(212, 175, 55, 0.1)' : 'none'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#D4AF37',
                  flexShrink: 0
                }} />
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Traits */}
        <div>
          <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
            {about.traits.title}
          </h3>
          <div style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(184, 134, 11, 0.05))',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {about.traits.list}
            </p>
          </div>
        </div>
      </section>

      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>{t.footer.rights}</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          {t.footer.madeWith}
        </p>
      </footer>
    </main>
  )
}