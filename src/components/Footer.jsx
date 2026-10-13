import React from 'react'
import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'
import logo from '../assets/Icone.png'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.9) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '3rem 1.5rem 2rem',
        marginTop: '4rem'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <img src={logo} alt="Parqueadero Cantinflas" style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              boxShadow: '0 10px 40px -15px rgba(251,191,36,0.6)'
            }} />
            <span className="gradient-text" style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              letterSpacing: '-0.02em'
            }}>
              Parqueadero Cantinflas
            </span>
          </motion.div>

          <p style={{
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: '1.8'
          }}>
            Parqueo especializado para vehículos pesados. Seguridad, confianza y espacio para su operación.
          </p>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#64748b',
            fontSize: '0.9rem',
            margin: 0
          }}>
            © {new Date().getFullYear()} Parqueadero Cantinflas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
