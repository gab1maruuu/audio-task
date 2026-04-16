import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        
        <Header />
        
        <main id="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodes />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
