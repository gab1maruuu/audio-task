import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success', 'error', 'loading'
  const [liveMessage, setLiveMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo no es válido.';
    }
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio.';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje no puede estar vacío.';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      setLiveMessage('El formulario tiene errores. Por favor, revíselos.');
      return;
    }

    setStatus('loading');
    setLiveMessage('Enviando mensaje...');
    
    setTimeout(() => {
      setStatus('success');
      setLiveMessage('¡Gracias por contactarnos! Tu mensaje sobre "' + formData.asunto + '" ha sido enviado con éxito. Te responderemos pronto.');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="container section fade-in">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <header className="text-center mb-5">
          <h1>¡Hablemos de <span className="text-gradient">Fútbol</span>!</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            ¿Tienes alguna pregunta, sugerencia o quieres participar en el podcast? Envíanos un mensaje.
          </p>
        </header>

        <div className="glass p-5">
          <div aria-live="polite" className="visually-hidden">
            {liveMessage}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {status === 'success' && (
              <div style={successBoxStyle}>
                <CheckCircle2 color="var(--color-success)" />
                <span>{liveMessage}</span>
              </div>
            )}

            <div style={formGroupStyle}>
              <label htmlFor="nombre" style={labelStyle}>Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                aria-invalid={errors.nombre ? 'true' : 'false'}
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                style={{
                  ...inputStyle,
                  borderColor: errors.nombre ? 'var(--color-error)' : 'rgba(255,255,255,0.1)'
                }}
                placeholder="Tu nombre"
              />
              {errors.nombre && (
                <span id="nombre-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={14} /> {errors.nombre}
                </span>
              )}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                style={{
                  ...inputStyle,
                  borderColor: errors.email ? 'var(--color-error)' : 'rgba(255,255,255,0.1)'
                }}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <span id="email-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={14} /> {errors.email}
                </span>
              )}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="asunto" style={labelStyle}>Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                aria-invalid={errors.asunto ? 'true' : 'false'}
                aria-describedby={errors.asunto ? 'asunto-error' : undefined}
                style={{
                  ...inputStyle,
                  borderColor: errors.asunto ? 'var(--color-error)' : 'rgba(255,255,255,0.1)'
                }}
                placeholder="¿Sobre qué quieres hablar?"
              />
              {errors.asunto && (
                <span id="asunto-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={14} /> {errors.asunto}
                </span>
              )}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleInputChange}
                aria-invalid={errors.mensaje ? 'true' : 'false'}
                aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                style={{
                  ...inputStyle,
                  borderColor: errors.mensaje ? 'var(--color-error)' : 'rgba(255,255,255,0.1)',
                  resize: 'vertical'
                }}
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
              {errors.mensaje && (
                <span id="mensaje-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={14} /> {errors.mensaje}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : (
                <>
                  <Send size={18} />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const formGroupStyle = { marginBottom: '1.2rem', display: 'flex', flexDirection: 'column' };
const labelStyle = { marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#dfdfe8' };
const inputStyle = { background: 'rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '12px 16px', color: 'white', fontSize: '1rem', transition: 'var(--transition-smooth)', outline: 'none' };
const errorTextStyle = { color: 'var(--color-error)', fontSize: '0.85rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' };
const successBoxStyle = { background: 'rgba(34, 197, 94, 0.1)', border: '1px solid var(--color-success)', padding: '1.2rem', borderRadius: '12px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px', color: '#4cd137', fontWeight: 600 };

export default Contact;
