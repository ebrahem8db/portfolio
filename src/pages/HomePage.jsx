import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import TechStack from '../components/TechStack'
import PortfolioGrid from '../components/PortfolioGrid'
import { useLanguage } from '../components/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TechStack />
      <PortfolioGrid />
      
      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        marginTop: '5rem'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>
          {t.footer.rights}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          {t.footer.madeWith}
        </p>
      </footer>
    </main>
  )
}