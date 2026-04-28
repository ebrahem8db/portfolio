import { useEffect, useRef, useState, useCallback } from 'react'
import { useLanguage } from './LanguageContext'

export default function SnakeGameBox() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const { t } = useLanguage()
  const gameRef = useRef({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: { x: 0, y: 0 },
    gameLoop: null
  })

  const GRID_SIZE = 20
  const CELL_SIZE = 15

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    
    ctx.fillStyle = '#0A0A0A'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)'
    ctx.lineWidth = 0.5
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath()
      ctx.moveTo(i * CELL_SIZE, 0)
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, i * CELL_SIZE)
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE)
      ctx.stroke()
    }

    const game = gameRef.current

    ctx.fillStyle = '#FF6B35'
    ctx.shadowBlur = 15
    ctx.shadowColor = '#FF6B35'
    ctx.beginPath()
    ctx.arc(
      game.food.x * CELL_SIZE + CELL_SIZE / 2,
      game.food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 1,
      0,
      Math.PI * 2
    )
    ctx.fill()
    ctx.shadowBlur = 0

    game.snake.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(
        segment.x * CELL_SIZE,
        segment.y * CELL_SIZE,
        (segment.x + 1) * CELL_SIZE,
        (segment.y + 1) * CELL_SIZE
      )
      gradient.addColorStop(0, index === 0 ? '#00D4FF' : '#0099CC')
      gradient.addColorStop(1, index === 0 ? '#66E0FF' : '#00D4FF')
      
      ctx.fillStyle = gradient
      ctx.fillRect(
        segment.x * CELL_SIZE + 1,
        segment.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      )

      if (index === 0) {
        ctx.fillStyle = 'white'
        ctx.fillRect(
          segment.x * CELL_SIZE + 3,
          segment.y * CELL_SIZE + 4,
          3, 3
        )
        ctx.fillRect(
          segment.x * CELL_SIZE + 9,
          segment.y * CELL_SIZE + 4,
          3, 3
        )
      }
    })
  }, [])

  const update = useCallback(() => {
    const game = gameRef.current
    const head = { ...game.snake[0] }
    head.x += game.direction.x
    head.y += game.direction.y

    if (head.x < 0) head.x = GRID_SIZE - 1
    if (head.x >= GRID_SIZE) head.x = 0
    if (head.y < 0) head.y = GRID_SIZE - 1
    if (head.y >= GRID_SIZE) head.y = 0

    if (game.snake.some(s => s.x === head.x && s.y === head.y)) {
      game.snake = [{ x: 10, y: 10 }]
      game.direction = { x: 1, y: 0 }
      setScore(0)
      return
    }

    game.snake.unshift(head)

    if (head.x === game.food.x && head.y === game.food.y) {
      setScore(s => s + 10)
      game.food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      }
    } else {
      game.snake.pop()
    }

    draw()
  }, [draw])

  useEffect(() => {
    const handleKeyDown = (e) => {
      const game = gameRef.current
      switch (e.key) {
        case 'ArrowUp':
          if (game.direction.y === 0) game.direction = { x: 0, y: -1 }
          break
        case 'ArrowDown':
          if (game.direction.y === 0) game.direction = { x: 0, y: 1 }
          break
        case 'ArrowLeft':
          if (game.direction.x === 0) game.direction = { x: -1, y: 0 }
          break
        case 'ArrowRight':
          if (game.direction.x === 0) game.direction = { x: 1, y: 0 }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    gameRef.current.gameLoop = setInterval(update, 150)
    draw()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearInterval(gameRef.current.gameLoop)
    }
  }, [update, draw])

  return (
    <div className="box-card">
      <h3 style={{ color: '#D4AF37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
        🎮 {t.portfolio.snake.title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
        {t.portfolio.snake.desc}
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
        Score: {score}
      </p>
      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        style={{
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          display: 'block',
          margin: '0 auto',
          maxWidth: '100%'
        }}
      />
      <p style={{ 
        color: 'rgba(255,255,255,0.5)', 
        fontSize: '0.8rem',
        marginTop: '0.5rem',
        textAlign: 'center'
      }}>
        {t.portfolio.snakeStart}
      </p>
    </div>
  )
}