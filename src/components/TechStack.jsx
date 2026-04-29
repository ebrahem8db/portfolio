import { useLanguage } from './LanguageContext'

const technologies = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'Next.js', level: 88, color: '#FFFFFF' },
  { name: 'Three.js', level: 85, color: '#00D4FF' },
  { name: 'Node.js', level: 90, color: '#68A063' },
  { name: 'TypeScript', level: 88, color: '#3178C6' },
  { name: 'Python', level: 82, color: '#FFD43B' },
  { name: 'Tailwind CSS', level: 92, color: '#38BDF8' },
  { name: 'JavaScript', level: 95, color: '#F7DF1E' },
  { name: 'HTML/CSS', level: 98, color: '#E34F26' },
  { name: 'Git', level: 85, color: '#F05032' },
  { name: 'MongoDB', level: 80, color: '#47A248' },
  { name: 'Firebase', level: 78, color: '#FFCA28' },
  { name: 'Dart', level: 75, color: '#0175C2' },
  { name: 'Kotlin', level: 72, color: '#7F52FF' },
  { name: 'C++', level: 85, color: '#00599C' },
]

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section id="tech" style={{ padding: '5rem 2rem', background: 'rgba(0,0,0,0.3)' }}>
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        marginBottom: '0.5rem',
        color: '#D4AF37'
      }}>
        {t.tech.title}
      </h2>
      <p style={{ 
        textAlign: 'center', 
        color: 'rgba(255,255,255,0.6)', 
        marginBottom: '3rem'
      }}>
        {t.tech.subtitle}
      </p>
      
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.2rem'
      }}>
        {technologies.map((tech, i) => (
          <div key={i} style={{
            background: 'rgba(20, 15, 5, 0.5)',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            transition: 'all 0.3s',
            cursor: 'default'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = tech.color + '40'
            e.currentTarget.style.transform = 'translateX(5px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)'
            e.currentTarget.style.transform = 'translateX(0)'
          }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.6rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: tech.color,
                  boxShadow: `0 0 8px ${tech.color}60`
                }} />
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{tech.name}</span>
              </div>
              <span style={{ color: tech.color, fontWeight: '700', fontSize: '0.85rem' }}>{tech.level}%</span>
            </div>
            <div style={{
              height: '6px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${tech.level}%`,
                background: `linear-gradient(90deg, ${tech.color}80, ${tech.color})`,
                borderRadius: '3px',
                transition: 'width 1.5s ease-out',
                boxShadow: `0 0 10px ${tech.color}30`
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}