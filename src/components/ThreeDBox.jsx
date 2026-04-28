import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useLanguage } from './LanguageContext'

function AnimatedShape({ position, color, speed }) {
  const meshRef = useRef()
  
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeDBox() {
  const { t } = useLanguage()

  return (
    <div className="box-card" style={{ minHeight: '400px' }}>
      <h3 style={{ 
        color: '#D4AF37', 
        marginBottom: '0.5rem',
        fontSize: '1.2rem'
      }}>
        🎨 {t.portfolio.box3d.title}
      </h3>
      <p style={{ 
        color: 'rgba(255,255,255,0.8)', 
        marginBottom: '1rem',
        fontSize: '0.9rem',
        lineHeight: '1.6'
      }}>
        {t.portfolio.box3d.desc}
      </p>
      <div style={{ 
        height: '250px', 
        borderRadius: '12px', 
        overflow: 'hidden',
        background: 'rgba(0,0,0,0.5)'
      }}>
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
          <pointLight position={[-10, -10, -10]} color="#FF6B35" intensity={0.8} />
          <pointLight position={[0, 10, -10]} color="#00D4FF" intensity={0.5} />
          
          <AnimatedShape position={[-2, 0, 0]} color="#FF6B35" speed={1} />
          <AnimatedShape position={[2, 0, 0]} color="#00D4FF" speed={1.5} />
          <AnimatedShape position={[0, 1.5, 0]} color="#FFD700" speed={2} />
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>
    </div>
  )
}