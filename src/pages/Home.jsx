import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Truck, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { info } from '../data/info'
import logo from '../assets/Icone.png'
import '../styles/global.css'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const Home = () => {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />

      <section id="inicio" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            style={{ marginBottom: '2rem' }}
          >
            <motion.img
              src={logo}
              alt="Parqueadero Cantinflas"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '2rem',
                boxShadow: '0 25px 80px -20px rgba(251,191,36,0.6), 0 0 120px -40px rgba(251,191,36,0.4)',
                border: '1px solid rgba(251,191,36,0.3)'
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <motion.h1
              variants={fadeInUp}
              className="gradient-text"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: '900',
                lineHeight: '1.05',
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem'
              }}
            >
              {info.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                fontWeight: '700',
                color: '#fbbf24',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}
            >
              {info.slogan}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#cbd5e1',
                maxWidth: '780px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.9'
              }}
            >
              {info.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <motion.a
                href="#servicios"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Servicios <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contacto"
                className="btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contactar
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              marginTop: '4rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              maxWidth: '900px',
              margin: '4rem auto 0'
            }}
          >
            {[
              { icon: Truck, text: 'Vehículos Pesados' },
              { icon: Shield, text: 'Vigilancia 24/7' },
              { icon: Clock, text: 'Control de Tiempo' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                whileHover={{ y: -4 }}
              >
                <item.icon size={20} style={{ color: '#fbbf24' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#f8fafc' }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="servicios" style={{
        padding: '5rem 1.5rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(251,191,36,0.15)',
              border: '1px solid rgba(251,191,36,0.4)',
              color: '#fbbf24',
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Nuestros Servicios
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#f8fafc',
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              Parqueo diseñado para{' '}
              <span className="gradient-text">vehículos pesados</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#cbd5e1',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.9'
            }}>
              Solución integral con seguridad, espacio y control para su operación.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" style={{
        padding: '5rem 1.5rem 6rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '0%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(251,191,36,0.15)',
              border: '1px solid rgba(251,191,36,0.4)',
              color: '#fbbf24',
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Contacto
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#f8fafc',
              letterSpacing: '-0.04em',
              marginBottom: '1rem'
            }}>
              ¿Listo para estacionar?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#cbd5e1',
              lineHeight: '1.9'
            }}>
              Estamos para atender sus necesidades de parqueo para vehículos pesados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass"
            style={{
              borderRadius: '2rem',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '1rem',
                  background: 'rgba(251,191,36,0.15)',
                  border: '1px solid rgba(251,191,36,0.4)'
                }}>
                  <MapPin size={22} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h4 style={{ color: '#f8fafc', fontWeight: '600', marginBottom: '0.25rem' }}>Ubicación</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.98rem' }}>{info.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '1rem',
                  background: 'rgba(251,191,36,0.15)',
                  border: '1px solid rgba(251,191,36,0.4)'
                }}>
                  <Phone size={22} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h4 style={{ color: '#f8fafc', fontWeight: '600', marginBottom: '0.25rem' }}>Teléfono</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.98rem' }}>{info.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '1rem',
                  background: 'rgba(251,191,36,0.15)',
                  border: '1px solid rgba(251,191,36,0.4)'
                }}>
                  <Mail size={22} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h4 style={{ color: '#f8fafc', fontWeight: '600', marginBottom: '0.25rem' }}>Correo</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.98rem' }}>{info.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '1rem',
                  background: 'rgba(251,191,36,0.15)',
                  border: '1px solid rgba(251,191,36,0.4)'
                }}>
                  <Clock size={22} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h4 style={{ color: '#f8fafc', fontWeight: '600', marginBottom: '0.25rem' }}>Horario</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.98rem' }}>{info.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
