import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>AdoptMe</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#mascotas">Mascotas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container">
          <h2>Bienvenido a AdoptMe</h2>
          <p>Encuentra a tu nuevo mejor amigo hoy mismo</p>
        </div>
      </section>

      <section id="sobre-nosotros" className="about">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <p>Somos una organización dedicada a encontrar hogares amorosos para mascotas necesitadas.</p>
        </div>
      </section>

      <section id="mascotas" className="pets">
        <div className="container">
          <h2>Nuestras Mascotas</h2>
          <div className="pet-list">
            <div className="pet">
              <img src="/images/perro1.jpg" alt="Perro 1" />
              <h3>Firulais</h3>
              <p>Macho - 2 años</p>
            </div>
            <div className="pet">
              <img src="/images/gato1.jpg" alt="Gato 1" />
              <h3>Misifu</h3>
              <p>Hembra - 1 año</p>
            </div>
            {/* Puedes agregar más mascotas aquí */}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container">
          <h2>Contáctanos</h2>
          <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 AdoptMe. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/adoptme" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/adoptme" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/adoptme" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
