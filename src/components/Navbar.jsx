import React from 'react'
import logo from '../assets/Icone.png'

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Parqueadero Cantinflas" style={styles.logo} />
        <span style={styles.brand}>Parqueadero Cantinflas</span>
      </div>
      <ul style={styles.menu}>
        <li><a href="#inicio" style={styles.link}>Inicio</a></li>
        <li><a href="#servicios" style={styles.link}>Servicios</a></li>
        <li><a href="#contacto" style={styles.link}>Contacto</a></li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '8px'
  },
  brand: {
    fontSize: '1.25rem',
    fontWeight: '700'
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s'
  }
}

export default Navbar
