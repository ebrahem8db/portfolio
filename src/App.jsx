import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './components/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import BackgroundAnimation from './components/BackgroundAnimation'
import MouseEffect from './components/MouseEffect'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <LanguageProvider>
      <BackgroundAnimation />
      <MouseEffect />
      <LanguageSwitcher />
      <Navigation />
      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App