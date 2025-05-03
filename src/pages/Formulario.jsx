// src/pages/Formulario.jsx
import { useState } from 'react';
import '../styles/Formulario.css';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    fecha: '',
    direccion: '',
    barrio: '',
    ciudad: '',
    telefono: '',
    correo: '',
    tipoVivienda: '',
    propiedad: '',
    acuerdo: '',
    ninos: '',
    otrasMascotas: '',
    alergias: '',
    motivo: '',
    vivira: '',
    problemas: '',
    tiempo: '',
    responsable: '',
    cambioResidencia: '',
    visita: '',
    veterinaria: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes hacer un fetch o axios.post
  };

  return (
    <div className="formulario-adopcion">
      <h1>🐾 <span>Formulario de Solicitud de Adopción</span> 🐾</h1>
      <p className="subtitulo">🐾 Asegurémonos de que cada mascota encuentre el hogar ideal 💕</p>

      <form onSubmit={handleSubmit}>
        <h2>📌 Información Personal</h2>

        <label htmlFor="nombre">Nombre Completo</label>
        <input type="text" id="nombre" placeholder="Tu Nombre" value={formData.nombre} onChange={handleChange} required />

        <label htmlFor="cedula">Cédula de ciudadanía</label>
        <input type="text" id="cedula" placeholder="Tu Cédula" value={formData.cedula} onChange={handleChange} required />

        <label htmlFor="fecha">Fecha de nacimiento:</label>
        <input type="date" id="fecha" value={formData.fecha} onChange={handleChange} required />

        <label htmlFor="direccion">Dirección de residencia:</label>
        <input type="text" id="direccion" placeholder="Tu Dirección" value={formData.direccion} onChange={handleChange} required />

        <label htmlFor="barrio">Barrio/Localidad:</label>
        <input type="text" id="barrio" placeholder="Tu Barrio" value={formData.barrio} onChange={handleChange} required />

        <label htmlFor="ciudad">Ciudad:</label>
        <input type="text" id="ciudad" placeholder="Tu Ciudad" value={formData.ciudad} onChange={handleChange} required />

        <label htmlFor="telefono">Teléfono de contacto:</label>
        <input type="tel" id="telefono" placeholder="Tu Teléfono" value={formData.telefono} onChange={handleChange} required />

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" placeholder="tucorreo@email.com" value={formData.correo} onChange={handleChange} required />

        <h2>📌 Información sobre el Hogar</h2>

        <label htmlFor="tipoVivienda">Tipo de vivienda:</label>
        <select id="tipoVivienda" value={formData.tipoVivienda} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
          <option value="finca">Finca</option>
        </select>

        <label htmlFor="propiedad">¿La vivienda es propia o arrendada?</label>
        <select id="propiedad" value={formData.propiedad} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="propia">Propia</option>
          <option value="arrendada">Arrendada</option>
        </select>

        <label htmlFor="acuerdo">¿Todos los miembros del hogar están de acuerdo con la adopción?</label>
        <select id="acuerdo" value={formData.acuerdo} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="ninos">¿Hay niños en casa?</label>
        <select id="ninos" value={formData.ninos} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="otrasMascotas">¿Tienes otras mascotas en casa?</label>
        <select id="otrasMascotas" value={formData.otrasMascotas} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="alergias">¿Alguien en casa tiene alergias a los animales?</label>
        <select id="alergias" value={formData.alergias} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <h2>📌 Información sobre la Adopción</h2>

        <label htmlFor="motivo">¿Por qué deseas adoptar una mascota?</label>
        <input type="text" id="motivo" placeholder="Escribe tu respuesta" value={formData.motivo} onChange={handleChange} required />

        <label htmlFor="vivira">¿Dónde vivirá la mascota?</label>
        <select id="vivira" value={formData.vivira} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="dentro">Dentro de la casa</option>
          <option value="patio">En el patio</option>
          <option value="exterior">En el exterior</option>
        </select>

        <label htmlFor="problemas">¿Qué harías si la mascota presenta problemas de salud o comportamiento?</label>
        <input type="text" id="problemas" placeholder="Escribe tu respuesta" value={formData.problemas} onChange={handleChange} required />

        <label htmlFor="tiempo">¿Cuánto tiempo pasará la mascota sola diariamente?</label>
        <select id="tiempo" value={formData.tiempo} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="menos2">Menos de 2 horas</option>
          <option value="2-4">2 a 4 horas</option>
          <option value="4-8">4 a 8 horas</option>
          <option value="mas8">Más de 8 horas</option>
        </select>

        <label htmlFor="responsable">¿Quién será el responsable principal de la mascota?</label>
        <input type="text" id="responsable" placeholder="Escribe tu respuesta" value={formData.responsable} onChange={handleChange} required />

        <label htmlFor="cambioResidencia">¿Qué harías si cambias de residencia y no puedes llevar a la mascota?</label>
        <input type="text" id="cambioResidencia" placeholder="Escribe tu respuesta" value={formData.cambioResidencia} onChange={handleChange} required />

        <h2>📌 Compromiso y Responsabilidad</h2>

        <label htmlFor="visita">¿Estás dispuesto(a) a recibir una visita virtual para validar el hogar?</label>
        <select id="visita" value={formData.visita} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="veterinaria">¿Te comprometes a brindar atención veterinaria y cuidados adecuados a la mascota?</label>
        <select id="veterinaria" value={formData.veterinaria} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <button className="btn" type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
}
