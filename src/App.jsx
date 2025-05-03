import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PetsSection from './components/PetsSection';
import ContactSection from './components/ContactSection';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Adoptar from './pages/Adoptar'; // Asegúrate de tener este archivo
import Mascota from './pages/Mascota'; // Cambié la importación aquí
import Formulario from './pages/Formulario.jsx';
import ComoAdoptar from './pages/ComoAdoptar.jsx';
import Formulario2 from './pages/Formulario2.jsx';

function App() {
  const [modal, setModal] = useState(null);

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  return (
    <Router>
      <Header openModal={openModal} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection openModal={openModal} />
              <PetsSection openModal={openModal} />
              <ContactSection />
              <Modal modal={modal} closeModal={closeModal} openModal={openModal} />
            </>
          }
        />
        <Route path="/adoptar" element={<Adoptar />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/formulario2" element={<Formulario2 />} />
        <Route path="/comoadoptar" element={<ComoAdoptar />} />
        <Route path="/mascota" element={<Mascota />} /> {/* Asegúrate de que la ruta sea correcta */}
      </Routes>

      <Footer openModal={openModal} />
    </Router>
  );
}

export default App;
