import React from 'react'
import { Link } from 'react-router-dom';


function Header({ openModal }) {
  return (
    <header>
      <div className="logo">
      <Link to="/">
  <img src="/img/logo.png" alt="AdoptMe Logo" />
</Link>
                  
      </div>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="Adoptar">Adoptar</a></li>
          <li><a href="ComoAdoptar">¿Cómo Adoptar?</a></li>
          <li><a href="Donar">Donar</a></li>
        </ul>
      </nav>
      <button className="btn" onClick={() => openModal('login')}>Iniciar Sesión</button>
    </header>
  )
}

export default Header
