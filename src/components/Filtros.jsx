import React from 'react'

const Filtros = () => (
  <aside className="filters">
    <h3>Filtrar por:</h3>

    <div className="filter-group">
      <h3>Sexo</h3>
      <label><input type="checkbox" /> Macho</label>
      <label><input type="checkbox" /> Hembra</label>
    </div>

    <div className="filter-group">
      <h3>Tamaño</h3>
      <label><input type="checkbox" /> Pequeño</label>
      <label><input type="checkbox" /> Mediano</label>
      <label><input type="checkbox" /> Grande</label>
    </div>

    <div className="filter-group">
      <h3>Edad</h3>
      <div className="slider-container">
        <input type="range" min="0" max="15" defaultValue="5" />
        <div className="range-labels">
          <span>1 año</span>
          <span>+6 años</span>
        </div>
      </div>
    </div>

    <button className="btn">Aplicar</button>
  </aside>
)

export default Filtros
