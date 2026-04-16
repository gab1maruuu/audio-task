import React from 'react';
import AccessibilityReport from './AccessibilityReport';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--color-bg-secondary)', 
      padding: '4rem 0 2rem', 
      marginTop: '4rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>FootCast</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Comprometidos con la difusión del fútbol y la accesibilidad web.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <AccessibilityReport />
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '2rem' }}>
            © {new Date().getFullYear()} FootCast. Desarrollado para la Práctica RA5 - Accesibilidad Web.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
