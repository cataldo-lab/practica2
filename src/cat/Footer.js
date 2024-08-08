// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p><a href="mailto:citec@ubiobio.cl">citec@ubiobio.cl</a></p>
          <p>Collao 1202, Casilla 5-C, Concepción, Bío Bío</p>
          <p>(569) 12345678</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-section">
          
          <p>© 2024 CITEC UBB. Todos los derechos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
