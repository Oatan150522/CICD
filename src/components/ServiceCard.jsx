import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      style={{
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(12px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1.5rem',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '100%'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top right, rgba(251, 191, 36, 0.15), transparent 70%)',
          pointerEvents: 'none'
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        style={{
          display: 'inline-flex',
          padding: '0.875rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.1) 100%)',
          border: '1px solid rgba(251,191,36,0.3)',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 40px -20px rgba(251,191,36,0.5)'
        }}
      >
        <span style={{ fontSize: '2rem' }}>{Icon}</span>
      </motion.div>

      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#f8fafc',
        marginBottom: '0.75rem',
        lineHeight: '1.3',
        letterSpacing: '-0.02em'
      }}>
        {title}
      </h3>

      <p style={{
        color: '#cbd5e1',
        lineHeight: '1.8',
        margin: 0,
        fontSize: '0.98rem'
      }}>
        {description}
      </p>

      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.5), transparent)'
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export default ServiceCard
