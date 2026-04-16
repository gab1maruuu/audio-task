import React from 'react';
import { NavLink } from 'react-router-dom';
import { Radio } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass" style={{ 
      position: 'sticky', 
      top: '1rem', 
      margin: '1rem auto', 
      width: 'max-content',
      maxWidth: 'min(90%, 1200px)',
      padding: '0.75rem 2rem',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      justifyContent: 'center'
    }}>
      <div className="logo d-flex align-items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem' }}>
        <Radio className="text-accent" aria-hidden="true" size={24} />
        <span className="text-gradient">FootCast</span>
      </div>
      
      <nav aria-label="Navegación principal">
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              style={navLinkStyle}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/episodios" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              style={navLinkStyle}
            >
              Episodios
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              style={navLinkStyle}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--color-text-muted);
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link:hover, .nav-link:focus {
          color: var(--color-text);
        }
        .nav-link.active {
          color: var(--color-text);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-accent);
          border-radius: 2px;
        }
      `}</style>
    </header>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'var(--transition-smooth)'
};

export default Header;
