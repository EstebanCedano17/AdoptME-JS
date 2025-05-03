import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import '../styles/Mascota.css';

const Mascota = () => {
  return (
    <div className="mascota-container">
    
      {/* Sección Presentación de la Mascota */}
      <section className="presentacion">
        <h2>Presentación de Mascota</h2>
        <div className="mascota-details">
          <div className="imagen">
            <img src="/img/Prueba3.jpg" alt="Joys" />
          </div>
          <div className="info">
            <h3>Hola, mi nombre es <span className="nombre">Joys</span></h3>
            <p><strong>Descripción:</strong> Soy un gatito que le gusta molestar de noche, muy activa y tragon.</p>
            <p><strong>Características:</strong></p>
            <div className="tags">
              <div className="tag">
                <strong>Masculino</strong>
                <span>Sexo</span>
              </div>
              <div className="tag">
                <strong>Negro</strong>
                <span>Color</span>
              </div>
              <div className="tag">
                <strong>Criollo</strong>
                <span>Raza</span>
              </div>
              <div className="tag">
                <strong>2kg</strong>
                <span>Peso</span>
              </div>
            </div>
            <Link to="/formulario">
  <button className="btn-adoptar">Adoptar</button>
</Link>

          </div>
        </div>
      </section>

      {/* Sección Conoce a más peluditos */}
      <section className="mas-peludos">
        <h2>Conoce a más peluditos</h2>
        <div className="peluditos-container">
          <div className="peludito">
            <img src="/img/Prueba1.png" alt="Dasha" />
            <h4>Pascual</h4>
            <p>Tengo 1 año y soy dócil</p>
            <Link to="/adoptar" className="btnn-adoptar">Ver más</Link> {/* Enlace para ir a Mascota */}
          </div>
          <div className="peludito">
            <img src="/img/Prueba2.png" alt="Dasha" />
            <h4>Arnulfo</h4>
            <p>Tengo 8 meses y me gusta dormir</p>
            <Link to="/adoptar" className="btnn-adoptar">Ver más</Link> {/* Enlace para ir a Mascota */}
          </div>
          <div className="peludito">
            <img src="/img/Prueba5.png" alt="Dasha" />
            <h4>Lucho</h4>
            <p>Tengo 1 año y soy amoroso</p>
            <Link to="/adoptar" className="btnn-adoptar">Ver más</Link> {/* Enlace para ir a Mascota */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mascota;
