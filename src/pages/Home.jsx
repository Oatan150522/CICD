import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { info } from '../data/info'
import logo from '../assets/Icone.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <section id="inicio" style={styles.hero}>
        <div style={styles.heroContent}>
          <img src={logo} alt="Parqueadero Cantinflas" style={styles.heroLogo} />
          <h1 style={styles.heroTitle}>{info.name}</h1>
          <p style={styles.heroSubtitle}>{info.slogan}</p>
          <p style={styles.heroDescription}>{info.description}</p>
        </div>
      </section>

      <section id="servicios" style={styles.services}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Nuestros Servicios</h2>
          <div style={styles.servicesGrid}>
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" style={styles.contact}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Contacto</h2>
          <div style={styles.contactInfo}>
            <p style={styles.contactItem}>{info.address}</p>
            <p style={styles.contactItem}>{info.phone}</p>
            <p style={styles.contactItem}>{info.email}</p>
            <p style={styles.contactItem}>{info.hours}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    color: '#fff',
    padding: '4rem 1rem',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroLogo: {
    width: '120px',
    height: '120px',
    borderRadius: '16px',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    margin: '0 0 0.5rem 0'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#fbbf24',
    margin: '0 0 1rem 0'
  },
  heroDescription: {
    fontSize: '1.125rem',
    color: '#d1d5db',
    lineHeight: '1.8',
    margin: 0
  },
  services: {
    padding: '3rem 1rem',
    backgroundColor: '#f9fafb'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    textAlign: 'center',
    color: '#1a1a1a',
    marginBottom: '2.5rem',
    margin: '0 0 2.5rem 0'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  contact: {
    padding: '3rem 1rem'
  },
  contactInfo: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto'
  },
  contactItem: {
    fontSize: '1.125rem',
    color: '#1a1a1a',
    marginBottom: '1rem',
    margin: '0 0 1rem 0'
  }
}

export default Home
