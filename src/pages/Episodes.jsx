import React, { useState } from 'react';
import { Play, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const episodesData = [
  {
    id: 1,
    number: 1,
    title: 'El Origen del Fútbol Moderno',
    description: 'De las escuelas inglesas al fenómeno global. Cómo las reglas de Cambridge cambiaron todo.',
    image: '/images/podcast1.png',
    audio: '/podcasts/historia del futbol.mp3',
    transcript: 'Bienvenidos a FootCast. Hoy exploramos cómo en 1863, en la Taberna Freemasons de Londres, se sentaron las bases del fútbol tal como lo conocemos hoy. Separando definitivamente el rugby del fútbol asociación, se establecieron reglas que priorizaban el uso de los pies y prohibían cargar excesivamente al oponente. Este fue el nacimiento de un fenómeno que conquistaría el mundo...'
  },
  {
    id: 2,
    number: 2,
    title: 'El Clásico: Más que un Partido',
    description: 'Análisis profundo de la rivalidad más grande del mundo y su impacto sociocultural.',
    image: '/images/podcast2.png',
    audio: '/podcasts/clasico.mp3',
    transcript: 'En este episodio analizamos la intensa rivalidad entre el Real Madrid y el FC Barcelona. No es solo fútbol; es política, es identidad y es historia compartida. Desde los tiempos de Di Stéfano hasta la era dorada de Messi y Cristiano, El Clásico ha definido el fútbol español y global, convirtiéndose en el evento deportivo más visto del año...'
  },
  {
    id: 3,
    number: 3,
    title: 'La Leyenda de Messi',
    description: 'La historia de uno de los mejores jugadores de todos los tiempos. Desde Rosario hasta la cima del mundo.',
    image: '/images/podcast3.png',
    audio: '/podcasts/messi.mp3',
    transcript: 'Lionel Messi ha redefinido lo que significa ser un futbolista de élite. En este episodio, trazamos su trayectoria desde sus humildes comienzos en Newell\'s Old Boys hasta su llegada a la Masía y su dominio en el Camp Nou. Analizamos su técnica, su mentalidad y cómo ha logrado mantenerse en la cima durante casi dos décadas...'
  },
  {
    id: 4,
    number: 4,
    title: '¿El VAR mejora el fútbol?',
    description: 'Debatimos sobre el impacto de la tecnología en el deporte rey. Justicia vs. Emoción.',
    image: '/images/podcast4.png',
    audio: '/podcasts/var.mp3',
    transcript: 'La llegada del VAR ha sido el cambio más controvertido en la historia reciente del fútbol. ¿Realmente ha traído justicia o ha matado la fluidez del juego? Escuchamos testimonios de árbitros, jugadores y aficionados para entender si la tecnología está cumpliendo su promesa de "mínima interferencia, máximo beneficio"...'
  }
];

const Episodes = () => {
  return (
    <div className="container section fade-in">
      <header className="mb-5">
        <h1 className="mb-3">Explora nuestros <span className="text-gradient">Episodios</span></h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
          Historias narradas con pasión. Cada episodio incluye una transcripción completa para garantizar la accesibilidad de nuestro contenido.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '3rem' }}>
        {episodesData.map(ep => (
          <EpisodeItem key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  );
};

const EpisodeItem = ({ episode }) => {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <article className="glass" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', minHeight: '250px' }}>
          <img 
            src={episode.image} 
            alt={`Portada del episodio ${episode.number}: ${episode.title}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: '2 1 400px', padding: '2.5rem' }}>
          <div style={{ 
            color: 'var(--color-accent)', 
            fontWeight: 600, 
            fontSize: '0.875rem', 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Episodio {episode.number}
          </div>
          <h2 style={{ marginBottom: '1rem' }}>{episode.title}</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{episode.description}</p>
          
          <div className="audio-section" style={{ marginBottom: '2rem' }}>
            <label htmlFor={`audio-player-${episode.id}`} className="visually-hidden">
              Reproducir audio del episodio {episode.title}
            </label>
            <audio 
              id={`audio-player-${episode.id}`}
              controls 
              style={{ width: '100%', borderRadius: '8px', filter: 'invert(0.9) hue-rotate(180deg)' }}
            >
              <source src={episode.audio} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>

          <button 
            onClick={() => setShowTranscript(!showTranscript)}
            aria-expanded={showTranscript}
            aria-controls={`transcript-${episode.id}`}
            style={{ 
              background: 'transparent', 
              color: 'var(--color-accent)', 
              fontWeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              cursor: 'pointer'
            }}
          >
            <FileText size={18} />
            {showTranscript ? 'Ocultar transcripción' : 'Ver transcripción'}
            {showTranscript ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showTranscript && (
            <div 
              id={`transcript-${episode.id}`}
              style={{ 
                marginTop: '1.5rem', 
                padding: '1.5rem', 
                background: 'rgba(0,0,0,0.2)', 
                borderRadius: '12px',
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '1rem' }}>Transcripción Completa</h3>
              <p>{episode.transcript}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Episodes;
