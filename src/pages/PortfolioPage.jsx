import { useLanguage } from '../components/LanguageContext'
import { ShoppingCart, Palette, BarChart3, Smartphone, Bot, Gamepad2, ExternalLink } from 'lucide-react'

// سهل الإضافة - أضف مشروع جديد هنا
const projects = [
  { 
    id: 1,
    title: 'E-Commerce Platform', 
    category: 'Web App', 
    description: 'Full-featured online store with payment integration',
    tech: ['React', 'Node.js', 'MongoDB'], 
    Icon: ShoppingCart, 
    color: '#D4AF37',
    link: '#'
  },
  { 
    id: 2,
    title: '3D Portfolio', 
    category: 'Interactive', 
    description: 'Immersive 3D website with WebGL animations',
    tech: ['Three.js', 'React', 'GSAP'], 
    Icon: Palette, 
    color: '#F4C430',
    link: '#'
  },
  { 
    id: 3,
    title: 'Dashboard Analytics', 
    category: 'Dashboard', 
    description: 'Real-time data visualization platform',
    tech: ['Next.js', 'TypeScript', 'Tailwind'], 
    Icon: BarChart3, 
    color: '#CD7F32',
    link: '#'
  },

   { 
    id: 7,
    title: 'E-Commerce WordPress platform', 
    category: 'Web site', 
    description: 'Full-featured online store with payment integration',
    tech: ['WordPress', 'WooCommerce', 'PHP' ], 
    Icon: ShoppingCart, 
    color: '#D4AF37',
    link: 'https://yaqeen-store.com/'
  },

  { 
    id: 4,
    title: 'Mobile Banking App', 
    category: 'Mobile', 
    description: 'Secure mobile banking with biometric auth',
    tech: ['React Native', 'Firebase'], 
    Icon: Smartphone, 
    color: '#B8860B',
    link: '#'
  },
  { 
    id: 5,
    title: 'AI Chat Interface', 
    category: 'AI Tool', 
    description: 'Smart chatbot with natural language processing',
    tech: ['Python', 'OpenAI', 'FastAPI'], 
    Icon: Bot, 
    color: '#DAA520',
    link: '#'
  },
  { 
    id: 6,
    title: 'Real-time Game', 
    category: 'Game', 
    description: 'Multiplayer browser game with Socket.io',
    tech: ['Socket.io', 'Canvas API'], 
    Icon: Gamepad2, 
    color: '#FFD700',
    link: '#'
  },
]

export default function PortfolioPage() {
  const { t } = useLanguage()

  return (
    <main style={{ paddingTop: '2rem' }}>
      <section style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#D4AF37', marginBottom: '1rem' }}>
          My Projects
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
          A collection of my work showcasing various skills and technologies
        </p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project) => {
            const IconComponent = project.Icon
            return (
              <a 
                key={project.id}
                href={project.link}
                style={{
                  background: 'rgba(20, 15, 5, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'block'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = project.color
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}15, 0 0 60px ${project.color}08`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Glow effect on hover */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, ${project.color}08 0%, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.4s'
                }} className="project-glow" />

                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                  border: `1px solid ${project.color}30`,
                  transition: 'all 0.3s'
                }}>
                  <IconComponent size={28} color={project.color} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <span style={{
                    padding: '0.25rem 0.7rem',
                    background: `${project.color}18`,
                    color: project.color,
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {project.category}
                  </span>
                  <ExternalLink size={14} color="rgba(255,255,255,0.4)" />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  fontSize: '0.9rem',
                  marginBottom: '1.2rem',
                  lineHeight: '1.5'
                }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tech.map((tech, j) => (
                    <span key={j} style={{
                      padding: '0.3rem 0.7rem',
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.7)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            )
          })}
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