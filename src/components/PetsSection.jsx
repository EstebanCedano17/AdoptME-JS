import React from 'react'

const pets = [
  {
    img: '/img/Prueba.png',
    name: 'Katherin',
    desc: 'Tengo 6 meses y soy muy cariñosa'
  },
  {
    img: '/img/Prueba1.png',
    name: 'Pascual',
    desc: 'Tengo 1 año y soy docil'
  },
  {
    img: '/img/Prueba2.png',
    name: 'Arnulfo',
    desc: 'Tengo 8 meses y me gusta dormir'
  }
]

function PetsSection({ openModal }) {
  return (
    <section className="pets">
      <h2>Peluditos Disponibles</h2>
      <div className="carousel">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <img src={pet.img} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.desc}</p>
            <button className="btn" onClick={() => openModal('login')}>Adoptar</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PetsSection
