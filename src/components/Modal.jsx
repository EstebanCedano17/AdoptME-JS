import React from 'react';
import '../styles/Modal.css'; // Asegúrate de importar el archivo CSS

function Modal({ modal, closeModal, openModal }) {
  if (!modal) return null;

  const renderContent = () => {
    switch (modal) {
      case 'login':
        return (
          <>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Iniciar Sesión</h2>
            <p>¿No tienes cuenta? <a href="#" onClick={() => { openModal('register') }}>Regístrate</a></p>
            <input type="text" placeholder="Correo o Usuario" />
            <input type="password" placeholder="Contraseña" />
            <p><a href="#" onClick={() => { openModal('forgotPassword') }}>¿Olvidaste tu contraseña?</a></p>
            <button>Iniciar Sesión</button>
          </>
        );
      case 'register':
        return (
          <>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Registrarse</h2>
            <p>¿Ya tienes cuenta? <a href="#" onClick={() => { openModal('login') }}>Inicia Sesión</a></p>
            <input type="text" placeholder="Correo o Usuario" />
            <input type="text" placeholder="Nombre de usuario" />
            <input type="text" placeholder="Número de contacto" />
            <input type="password" placeholder="Contraseña" />
            <button onClick={() => openModal('login')}>Registrarse</button>
          </>
        );
      case 'forgotPassword':
        return (
          <>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Recuperar Contraseña</h2>
            <p>Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.</p>
            <input type="email" placeholder="Correo electrónico" />
            <button onClick={() => openModal('resetPassword')}>Enviar</button>
          </>
        );
      case 'resetPassword':
        return (
          <>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Establecer Nueva Contraseña</h2>
            <p>Ingresa tu nueva contraseña.</p>
            <input type="password" placeholder="Nueva contraseña" />
            <input type="password" placeholder="Confirmar contraseña" />
            <button onClick={() => openModal('login')}>Actualizar Contraseña</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Modal;
