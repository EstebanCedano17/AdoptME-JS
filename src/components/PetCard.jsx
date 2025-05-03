import React from 'react'
import { useNavigate } from 'react-router-dom'

const PetCard = ({ nombre, edad, descripcion, imagen }) => {
  const navigate = useNavigate()

  return (
    <div className="pet-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <button className="btn" onClick={() => navigate('/mascota')}>Adoptar</button>
    </div>
  )
}

export default PetCard
