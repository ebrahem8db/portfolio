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
        marginBottom: '0.5rem',
        color: '#D4AF37'
      }}>
        {t.portfolio.demosSubtitle}
      </h2>
      <p style={{ 
        textAlign: 'center', 
        color: 'rgba(255,255,255,0.7)',
        marginBottom: '3rem',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {t.portfolio.demosDescription}
      </p>
      
      <div className="portfolio-grid">
        <ThreeDBox />
        <SnakeGameBox />
        <CodeAnimationBox />
      </div>
    </section>
  )
}