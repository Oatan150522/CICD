import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Parqueadero Cantinflas. Parqueo especializado para vehículos pesados.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '2rem 1rem',
    marginTop: '3rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  },
  text: {
    margin: 0,
    fontSize: '0.9rem'
  }
}

export default Footer
