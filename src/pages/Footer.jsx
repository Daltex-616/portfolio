import React from 'react';
import "../public/footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Importando iconos de redes sociales

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <strong className="footer-logo">Daltex</strong>
          <p>Construyendo soluciones a medida</p>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Daltex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};