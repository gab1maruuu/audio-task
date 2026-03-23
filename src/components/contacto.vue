<template>
  <div class="contacto-container">
    <div class="contacto-card">
      <h2 class="contacto-title">¡Hablemos de Fútbol!</h2>
      <p class="contacto-subtitle">¿Tienes alguna pregunta, sugerencia o quieres participar en el podcast? Envíanos un mensaje.</p>
      
      <form @submit.prevent="enviarMensaje" class="contacto-form">
        <div class="input-group">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="form.nombre" placeholder="Tu nombre" required />
        </div>
        
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="form.email" placeholder="tu@email.com" required />
        </div>
        
        <div class="input-group">
          <label for="asunto">Asunto</label>
          <input type="text" id="asunto" v-model="form.asunto" placeholder="¿Sobre qué quieres hablar?" required />
        </div>
        
        <div class="input-group">
          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje" v-model="form.mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </div>
        
        <button type="submit" class="submit-btn" :class="{ 'btn-loading': loading }" :disabled="loading">
          <span v-if="!loading">Enviar Mensaje</span>
          <span v-else>Enviando...</span>
        </button>
        
        <div v-if="successMessage" class="success-message">
          ¡Gracias por contactarnos! Te responderemos pronto.
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      },
      loading: false,
      successMessage: false
    }
  },
  methods: {
    enviarMensaje() {
      this.loading = true;
      // Simulamos el envío de datos a un servidor
      setTimeout(() => {
        this.loading = false;
        this.successMessage = true;
        this.form = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };
        
        setTimeout(() => {
          this.successMessage = false;
        }, 4000);
      }, 1500);
    }
  }
}
</script>

<style scoped>
.contacto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: transparent;
  font-family: 'Inter', 'Roboto', sans-serif;
}

.contacto-card {
  background: rgba(30, 30, 35, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
  color: #fff;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
}

.contacto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.2);
}

.contacto-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -0.5px;
}

.contacto-subtitle {
  text-align: center;
  color: #a0a0b0;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;
}

.contacto-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #dfdfe8;
  margin-left: 0.5rem;
  letter-spacing: 0.5px;
}

input, textarea {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #fff;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

input::placeholder, textarea::placeholder {
  color: #606070;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #4facfe;
  box-shadow: 0 0 0 4px rgba(79, 172, 254, 0.15);
  background: rgba(0, 0, 0, 0.4);
}

.submit-btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #0d1117;
  font-weight: 800;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  padding: 0.9rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(0, 242, 254, 0.3);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(1px);
}

.btn-loading {
  opacity: 0.7;
  cursor: not-allowed;
  background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
  color: #fff;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1.2rem;
  background: rgba(46, 213, 115, 0.15);
  border: 1px solid rgba(46, 213, 115, 0.4);
  color: #4cd137;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 1.05rem;
  animation: fadeIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-15px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 600px) {
  .contacto-card {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
  
  .contacto-title {
    font-size: 2.2rem;
  }
}
</style>    