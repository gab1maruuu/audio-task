<template>
  <div class="episodios-container d-flex flex-column align-items-center py-5 text-white">
    <div class="hero-content text-center mb-5">
      <h1 class="display-1 fw-bold mb-4 tracking-tight">
        Otros <span class="text-accent">Episodios</span>
      </h1>
      <p class="fs-4 fw-light text-white-50 mb-5 mx-auto" style="max-width: 600px;">
        Explora nuestra colección completa de historias futbolísticas.
      </p>
    </div>

    <div class="container mt-4">
      <div class="row g-4">
        <div v-for="ep in episodios" :key="ep.id" class="col-md-6 col-lg-3">
          <div class="card h-100 episode-card shadow-lg border-0">
            <div class="card-img-top position-relative overflow-hidden">
              <img :src="ep.imagen" class="img-fluid w-100" :alt="ep.titulo">
            </div>
            <div class="card-body p-4">
              <div class="badge bg-accent mb-2">EPISODIO {{ ep.numero }}</div>
              <h3 class="h4 fw-bold text-white">{{ ep.titulo }}</h3>
              <p class="text-white-50 mb-4">{{ ep.descripcion }}</p>
              <audio controls class="w-100 custom-audio-player">
                <source :src="ep.audio" type="audio/mpeg">
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Episodios',
  data() {
    return {
      episodios: [
        {
          id: 1,
          numero: 1,
          titulo: 'Episodio 1',
          descripcion: 'Descripción del episodio 1.',
          imagen: '/public/images/podcast 5.png',
          audio: ''
        },
        {
          id: 2,
          numero: 2,
          titulo: 'Episodio 2',
          descripcion: 'Descripción del episodio 2.',
          imagen: '/public/images/podcast 5.png',
          audio: ''
        },
        {
          id: 3,
          numero: 3,
          titulo: 'Episodio 3',
          descripcion: 'Descripción del episodio 3.',
          imagen: '/public/images/podcast 5.png',
          audio: ''
        },
        {
          id: 3,
          numero: 3,
          titulo: 'Episodio 3',
          descripcion: 'Descripción del episodio 3.',
          imagen: '/public/images/podcast 5.png',
          audio: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.episodios-container {
  background: radial-gradient(circle at top center, #1e293b 0%, #0f172a 100%);
  min-height: calc(100vh - 160px);
  position: relative;
}

.episodios-container::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
  opacity: 0.05;
  pointer-events: none;
}

.text-accent {
  color: #4f46e5;
  background: linear-gradient(to right, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.episode-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.episode-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(99, 102, 241, 0.5) !important;
}

.bg-accent {
  background-color: #4f46e5 !important;
}

.tracking-tight {
  letter-spacing: -0.02em;
}

.hero-content {
  animation: fadeIn 1s ease-out;
}

.card-img-top img {
  transition: transform 0.5s ease;
}

.episode-card:hover .card-img-top img {
  transform: scale(1.1);
}

.custom-audio-player {
  filter: invert(100%) hue-rotate(180deg) brightness(1.5);
  height: 35px;
  border-radius: 8px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>