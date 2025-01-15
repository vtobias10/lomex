// src/App.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Importar react-scroll
import Navbar from './Navbar';
import Nosotros from './Nosotros';
import Servicios from './Servicios';
import Clientes from './Clientes';
import Proveedores from './Proveedores';
import Contacto from './Contacto';
import Footer from './Footer';
import HeroImage from './HeroImage';  // Importamos el componente HeroImage

function App() {
  const [scrolling, setScrolling] = useState(false);

  // Detectar el scroll y mostrar el botón cuando sea necesario
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true); // Mostrar el botón
      } else {
        setScrolling(false); // Ocultar el botón
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* HeroImage está encima de todo */}
      <HeroImage />

      {/* Navbar sin espacio entre la imagen */}
      <Navbar />

      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="clientes">
        <Clientes />
      </div>
      <div id="proveedores">
        <Proveedores />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
      <Footer />

      {/* Botón flotante para volver arriba */}
      <Link
        to="nosotros" // Este es el ID al que queremos desplazarnos
        smooth={true}
        duration={500} // Tiempo de la animación de desplazamiento
        className={`scroll-top-button ${scrolling ? 'show' : ''}`} // Añadir la clase "show" cuando sea necesario
      >
        ↑
      </Link>
    </>
  );
}

export default App;
