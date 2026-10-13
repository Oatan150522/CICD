import React from 'react'

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: '1px solid #e5e7eb'
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '0.75rem'
  },
  description: {
    color: '#4b5563',
    lineHeight: '1.6',
    margin: 0
  }
}

export default ServiceCard
