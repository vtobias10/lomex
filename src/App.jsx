// src/App.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import Nosotros from './Nosotros';
import Servicios from './Servicios';
import Clientes from './Clientes';
import Proveedores from './Proveedores';
import Contacto from './Contacto';
import Footer from './Footer';
import HeroImage from './HeroImage';

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0); // Estado para la altura del navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight); // Obtener la altura del navbar
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Inicializar la altura del navbar al cargar

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <HeroImage onScroll={setScrolling} />
      <Navbar isFixed={scrolling} />
      <div
        id="nosotros"
        style={{
          paddingTop: window.innerWidth > 768 && scrolling ? `${navbarHeight}px` : '0', // Solo agrega el padding en pantallas grandes y con scroll
        }}
      >
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
      <Link
        to="nosotros"
        smooth={true}
        duration={500}
        className={`scroll-top-button ${scrolling ? 'show' : ''}`}
      >
        ↑
      </Link>
    </>
  );
}

export default App;
