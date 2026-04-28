import ThreeDBox from './ThreeDBox'
import SnakeGameBox from './SnakeGameBox'
import CodeAnimationBox from './CodeAnimationBox'
import { useLanguage } from './LanguageContext'

export default function PortfolioGrid() {
  const { t } = useLanguage()

  return (
    <section id="portfolio" style={{ padding: '5rem 2rem' }}>
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        marginBottom: '1rem',
        color: '#D4AF37'
      }}>
        What I Can Build
      </h2>
      <p style={{ 
        textAlign: 'center', 
        color: 'rgba(255,255,255,0.7)',
        marginBottom: '3rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Interactive demos showcasing my capabilities. I can create 3D experiences, games, and animated code presentations for your projects.
      </p>
      
      <div className="portfolio-grid">
        <ThreeDBox />
        <SnakeGameBox />
        <CodeAnimationBox />
      </div>
    </section>
  )
}