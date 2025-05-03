import React, { useState } from 'react';
import '../styles/Formulario2.css';

const Formulario2 = () => {
  const [fileName1, setFileName1] = useState('No se ha seleccionado ningún archivo');
  const [fileName2, setFileName2] = useState('No se ha seleccionado ningún archivo');
  const [fileNameFotos, setFileNameFotos] = useState('No se ha seleccionado ningún archivo');
  const [fileNameVideo, setFileNameVideo] = useState('No se ha seleccionado ningún archivo');

  const mostrarNombre = (e, setter) => {
    const files = e.target.files;
    if (files.length > 0) {
      const names = Array.from(files).map(file => file.name).join(', ');
      setter(names);
    } else {
      setter('No se ha seleccionado ningún archivo');
    }
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="/img/logo.png" alt="AdoptMe Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/adopcion">Adoptar</a></li>
            <li><a href="/comoadoptar">¿Cómo Adoptar?</a></li>
            <li><a href="/donar">Donar</a></li>
            <li><a href="/entregables">Entregables</a></li>
          </ul>
        </nav>
        <button className="btn" onClick={() => alert('Abrir modal de inicio de sesión')}>Iniciar Sesión</button>
      </header>

      <section className="form-section">
        <h1>🐾 <span>Formulario de Publicación De Mascota</span> 🐾</h1>
        <p className="subtitulo">🐾 Comparte la historia de tu mascota y ayúdala a encontrar un hogar amoroso 💕</p>

        <h2>📌 Información del Publicador</h2>
        <form id="formularioAdopcion" method="POST" encType="multipart/form-data">
          <fieldset>
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" required />

            <label htmlFor="cedula">Cédula de ciudadanía</label>
            <input type="text" id="cedula" name="cedula" placeholder="Tu Cédula" required />

            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" placeholder="tucorreo@email.com" required />

            <label htmlFor="telefono">Teléfono de contacto</label>
            <input type="tel" id="telefono" name="telefono" placeholder="Tu Teléfono de contacto" required />

            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" id="ciudad" name="ciudad" placeholder="Tu Ciudad" required />

            <label htmlFor="barrio">Barrio/Localidad</label>
            <input type="text" id="barrio" name="barrio" placeholder="Tu Barrio/Localidad" required />

            <label htmlFor="direccion">Dirección de residencia</label>
            <input type="text" id="direccion" name="direccion" placeholder="Tu Dirección de residencia" required />
          </fieldset>

          <h2>📎 Adjuntar Documento de Identidad</h2>
          <p>(Para validar identidad y evitar fraudes)</p>

          <div className="file-upload">
            <label htmlFor="doc_identidad_1">Elegir Archivo</label>
            <input
              type="file"
              id="doc_identidad_1"
              name="doc_identidad_1"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={e => mostrarNombre(e, setFileName1)}
            />
            <span>{fileName1}</span>
          </div>

          <div className="file-upload">
            <label htmlFor="doc_identidad_2">Elegir Archivo</label>
            <input
              type="file"
              id="doc_identidad_2"
              name="doc_identidad_2"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={e => mostrarNombre(e, setFileName2)}
            />
            <span>{fileName2}</span>
          </div>

          <h2>📌 Información de la Mascota</h2>

          <label htmlFor="nombre_mascota">Nombre de la mascota:</label>
          <input type="text" id="nombre_mascota" name="nombre_mascota" placeholder="Nombre de la mascota" />

          <label htmlFor="especie">Especie:</label>
          <select id="especie" name="especie">
            <option value="">Seleccionar</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </select>

          <label htmlFor="raza">Raza:</label>
          <select id="raza" name="raza">
            <option value="">Seleccionar</option>
          </select>

          <label htmlFor="edad">Edad aproximada:</label>
          <input type="text" id="edad" name="edad" placeholder="Edad aproximada" />

          <label htmlFor="tamano">Tamaño:</label>
          <select id="tamano" name="tamano">
            <option value="">Seleccionar</option>
            <option value="pequeno">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>

          <label htmlFor="estado_salud">Estado de salud:</label>
          <select id="estado_salud" name="estado_salud">
            <option value="">Seleccionar</option>
            <option value="saludable">Saludable</option>
            <option value="requiere_cuidados">Requiere Cuidados</option>
            <option value="otro">Otro</option>
          </select>

          <label htmlFor="personalidad">Personalidad y comportamiento:</label>
          <textarea id="personalidad" name="personalidad" placeholder="Escribe tu respuesta" />

          <label htmlFor="historia">Historia de la mascota:</label>
          <textarea id="historia" name="historia" placeholder="Escribe tu respuesta" />

          <label htmlFor="fotos_mascota">📎 Adjuntar mínimo 3 fotos de la mascota</label>
          <div className="file-upload">
            <input
              type="file"
              id="fotos_mascota"
              name="fotos_mascota[]"
              multiple
              accept="image/*"
              onChange={e => mostrarNombre(e, setFileNameFotos)}
            />
            <label htmlFor="fotos_mascota">Elegir Archivo</label>
            <span>{fileNameFotos}</span>
          </div>

          <label htmlFor="video_mascota">📎 Opcional: Adjuntar video corto de la mascota</label>
          <div className="file-upload">
            <input
              type="file"
              id="video_mascota"
              name="video_mascota"
              accept="video/*"
              onChange={e => mostrarNombre(e, setFileNameVideo)}
            />
            <label htmlFor="video_mascota">Elegir Archivo</label>
            <span>{fileNameVideo}</span>
          </div>

          <button type="submit" className="btn">Enviar Solicitud</button>
        </form>
      </section>
    </>
  );
};

export default Formulario2;
