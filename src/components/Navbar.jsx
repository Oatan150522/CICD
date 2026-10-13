import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Icone.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
      style={{
        background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        padding: scrolled ? '0.5rem 0' : '1rem 0'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <img src={logo} alt="Parqueadero Cantinflas" style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4)'
          }} />
          <span className="gradient-text" style={{
            fontSize: '1.1rem',
            fontWeight: '800',
            letterSpacing: '-0.02em'
          }}>
            Parqueadero Cantinflas
          </span>
        </motion.div>

        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="hidden md:flex">
          {['inicio', 'servicios', 'contacto'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                fontWeight: '500',
                textTransform: 'capitalize',
                fontSize: '0.95rem',
                position: 'relative',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fbbf24'}
              onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
            >
              {item}
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
                  borderRadius: '2px'
                }}
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            padding: '0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
