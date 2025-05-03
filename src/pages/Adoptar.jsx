import React from 'react'
import Filtros from '../components/Filtros'
import PetCard from '../components/PetCard'
import Paginacion from '../components/Paginacion'
import '../styles/Adoptar.css';

const mascotas = [
  { nombre: 'Joys', descripcion: 'Tengo 1 mes y como mucho 🐾', imagen: '/img/Prueba3.jpg' },
  { nombre: 'Genoeva', descripcion: 'Tengo 2 años y juego micro 🐾', imagen: '/img/Prueba4.jpg' },
  { nombre: 'Lucho', descripcion: 'Tengo 1 año y soy amoroso 🐾', imagen: '/img/Prueba5.png' },
  { nombre: 'Sabrina', descripcion: 'Tengo 7 meses y soy juguetona 🐾', imagen: '/img/Prueba6.jpg' },
  { nombre: 'Wellington', descripcion: 'Tengo 1 año y me gusta el mango 🐾', imagen: '/img/Prueba7.jpg' }
]

const Adoptar = () => (
  <>

    <h1 className="title">Peluditos Disponibles</h1>
    <div className="container">
      <Filtros />
      <section className="pets-grid">
        {mascotas.map((m, i) => (
          <PetCard key={i} {...m} />
        ))}
      </section>
    </div>
    <Paginacion />
         
  </>
)

export default Adoptar
