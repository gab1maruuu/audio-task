import React from 'react';
import { Play, Mic2, ShieldCheck, AudioLines } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="mb-4">
            Bienvenido a <br />
            <span className="text-gradient">FootCast</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--color-text-muted)', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            fontWeight: 300
          }}>
            Descubre los mejores podcasts sobre fútbol aquí. Las historias más épicas y el análisis más profundo, accesibles para todos.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <Link to="/episodios" className="btn-primary" aria-label="Ver todos los episodios del podcast">
              <Play size={20} aria-hidden="true" />
              Ver Episodios
            </Link>
            <a href="#latest-episode" style={{ 
              padding: '12px 24px', 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.02)',
              fontWeight: 600
            }} aria-label="Escuchar el episodio más reciente">
              Escuchar Reciente ⬇
            </a>
          </div>
        </div>
      </section>

      {/* Latest Episode Highlight */}
      <section id="latest-episode" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <div className="glass overflow-hidden" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 350px', position: 'relative', minHeight: '300px' }}>
                <img 
                  src="/images/podcast 5.png" 
                  alt="Portada del episodio reciente: #5 La Final Inolvidable" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '0', left: '0', width: '100%', height: '100%', 
                  background: 'rgba(0,0,0,0.3)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Play size={64} color="white" style={{ opacity: 0.8 }} />
                </div>
              </div>
              <div style={{ flex: '2 1 400px', padding: '3rem' }}>
                <div style={{ 
                  background: 'var(--color-accent)', 
                  color: 'white', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700,
                  width: 'fit-content',
                  marginBottom: '1rem'
                }}>
                  EPISODIO RECIENTE
                </div>
                <h2 className="mb-3">#5: La Final Inolvidable</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Descubre cómo el trauma del Maracanazo en 1950 y un concurso de diseño crearon la icónica camiseta amarilla de Brasil, símbolo de su pasión y éxito futbolístico.
                </p>
                
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px' }}>
                  <label htmlFor="latest-audio" className="visually-hidden">Reproducir episodio #5</label>
                  <audio id="latest-audio" controls style={{ width: '100%', borderRadius: '8px', filter: 'invert(0.9) hue-rotate(180deg)' }}>
                    <source src="/podcasts/maracanazo.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">¿Por qué <span className="text-accent">FootCast</span>?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            <FeatureCard 
              icon={<Mic2 className="text-accent" />}
              title="Calidad Premium"
              description="Producción de audio de alta fidelidad para que no te pierdas ni un detalle de la narrativa."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-accent" />}
              title="Sin Barreras"
              description="Web diseñada bajo estándares WCAG AA, garantizando el acceso a personas con discapacidades."
            />
            <FeatureCard 
              icon={<AudioLines className="text-accent" />}
              title="Transcripciones"
              description="Todos nuestros episodios cuentan con transcripción completa para una accesibilidad total."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="glass p-5" style={{ padding: '2.5rem', height: '100%' }}>
    <div style={{ 
      background: 'rgba(99, 102, 241, 0.1)', 
      width: 'max-content', 
      padding: '15px', 
      borderRadius: '15px',
      marginBottom: '1.5rem'
    }}>
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>{description}</p>
  </div>
);

export default Home;
