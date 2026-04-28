import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageContext'

const codeSnippets = [
  { text: 'const developer = {', type: 'keyword' },
  { text: '  name: "Ebrahem",', type: 'string' },
  { text: '  role: "Full Stack",', type: 'string' },
  { text: '  skills: ["React", "Three.js", "Node"],', type: 'string' },
  { text: '  create: () => {', type: 'function' },
  { text: '    return magic;', type: 'variable' },
  { text: '  }', type: 'keyword' },
  { text: '};', type: 'keyword' },
  { text: '// I can build anything you imagine', type: 'comment' },
  { text: 'developer.create();', type: 'function' },
]

export default function CodeAnimationBox() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    if (currentLine >= codeSnippets.length) {
      setTimeout(() => {
        setDisplayedLines([])
        setCurrentLine(0)
        setCurrentChar(0)
      }, 3000)
      return
    }

    const line = codeSnippets[currentLine]
    
    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar(c => c + 1)
      }, 50 + Math.random() * 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line])
        setCurrentLine(c => c + 1)
        setCurrentChar(0)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar])

  const getColor = (type) => {
    switch (type) {
      case 'keyword': return '#569cd6'
      case 'string': return '#ce9178'
      case 'function': return '#dcdcaa'
      case 'comment': return '#6a9955'
      case 'variable': return '#9cdcfe'
      default: return 'white'
    }
  }

  return (
    <div className="box-card">
      <h3 style={{ color: '#D4AF37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
        💻 {t.portfolio.code.title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
        {t.portfolio.code.desc}
      </p>
      
      <div style={{
        background: '#1e1e1e',
        borderRadius: '12px',
        padding: '1.5rem',
        fontFamily: "'Fira Code', monospace",
        fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
        lineHeight: '1.8',
        minHeight: '280px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '30px',
          background: '#252526',
          borderRadius: '12px 12px 0 0',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          gap: '0.5rem'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ marginLeft: '1rem', color: '#858585', fontSize: '0.75rem' }}>
            ebrahem.js
          </span>
        </div>

        <div style={{ marginTop: '30px' }}>
          {displayedLines.map((line, i) => (
            <div key={i} style={{ display: 'flex' }}>
              <span style={{ 
                color: '#858585', 
                width: '2rem', 
                textAlign: 'right',
                marginRight: '1rem',
                userSelect: 'none'
              }}>
                {i + 1}
              </span>
              <span style={{ color: getColor(line.type) }}>
                {line.text}
              </span>
            </div>
          ))}
          
          {currentLine < codeSnippets.length && (
            <div style={{ display: 'flex' }}>
              <span style={{ 
                color: '#858585', 
                width: '2rem', 
                textAlign: 'right',
                marginRight: '1rem',
                userSelect: 'none'
              }}>
                {currentLine + 1}
              </span>
              <span style={{ color: getColor(codeSnippets[currentLine].type) }}>
                {codeSnippets[currentLine].text.substring(0, currentChar)}
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '1.2em',
                  background: '#D4AF37',
                  animation: 'blink 1s infinite',
                  verticalAlign: 'text-bottom',
                  marginLeft: '2px'
                }} />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}