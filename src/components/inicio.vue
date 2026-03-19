<template>
  <div class="inicio-container d-flex flex-column align-items-center justify-content-center text-white py-5">
    <div class="hero-content text-center mb-5">
      <h1 class="display-1 fw-bold mb-4 tracking-tight">
        Bienvenido a <span class="text-accent">FootCast</span>
      </h1>
      <p class="fs-4 fw-light text-white-50 mb-5 mx-auto" style="max-width: 600px;">
        Descubre los mejores podcast sobre Futbol aquí.
      </p>
      <div class="d-flex gap-3 justify-content-center">
        <router-link to="/episodios"><button class="btn btn-outline-light btn-lg px-5 py-3 fw-bold">Ver todos los episodios</button></router-link>
        <button class="btn btn-accent btn-lg px-5 py-3 fw-bold shadow-lg">Escuchar el más reciente ⬇</button>
      </div>
    </div>
    <div class="container">
      <div class="latest-episode-section shadow-lg mx-auto overflow-hidden">
        <div class="row g-0">
          <div class="col-md-4">
            <div class="cover-container h-100 d-flex align-items-center justify-content-center bg-dark">
              <img src="/public/images/podcast 5.png" alt="Portada del Podcast" class="img-fluid cover-image">
              <div class="overlay-play">
                <i class="bi bi-play-fill display-4"></i>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="p-4 p-lg-5 h-100 d-flex flex-column justify-content-center">
              <div class="badge bg-accent mb-2 w-fit-content">EPISODIO RECIENTE</div>
              <h2 class="h1 fw-bold mb-3">#5: La Final Inolvidable</h2>
              <p class="text-white-50 fs-5 mb-4">Descubre cómo el trauma del Maracanazo en 1950 y un concurso de diseño crearon la icónica camiseta amarilla de Brasil, símbolo de su pasión y éxito futbolístico.</p>
              <div class="player-container mt-auto">
                <audio controls class="w-100 custom-audio-player">
                  <source src="../../public/podcasts/hate being sober.mp3" type="audio/mpeg">
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style scoped>
.inicio-container {
  background: radial-gradient(circle at top center, #1e293b 0%, #0f172a 100%);
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 160px); /* Ajuste para header y footer */
}

.inicio-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
  opacity: 0.05;
  pointer-events: none;
}
.latest-episode-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  max-width: 1000px;
  animation: slideUp 0.8s ease-out;
}

.cover-container {
  position: relative;
  min-height: 300px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.latest-episode-section:hover .cover-image {
  transform: scale(1.05);
}

.bg-accent {
  background-color: #4f46e5 !important;
}

.w-fit-content {
  width: fit-content;
}

.text-accent {
  color: #4f46e5;
  background: linear-gradient(to right, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-accent {
  background-color: #4f46e5;
  border-color: #4f46e5;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-accent:hover {
  background-color: #4338ca;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
}

.btn-outline-light:hover {
  transform: translateY(-3px);
}

.tracking-tight {
  letter-spacing: -0.02em;
}

.hero-content {
  animation: fadeIn 1s ease-out;
}

.custom-audio-player {
  filter: invert(100%) hue-rotate(180deg) brightness(1.5); /* Truco para que el reproductor nativo sea claro */
  height: 40px;
  border-radius: 8px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .latest-episode-section {
    border-radius: 16px;
  }
}
</style>