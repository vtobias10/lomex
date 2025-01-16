// src/HeroImage.jsx
import { useState, useEffect } from 'react';
import lomexBackground from './assets/lomexBackground.jpg';

const HeroImage = ({ onScroll }) => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 0) {
        onScroll(true);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        const navbar = document.getElementById('navbar');
        if (navbar) {
          setNavbarHeight(navbar.offsetHeight);  // Obtener la altura del navbar
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Inicializar la altura del navbar al cargar

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [onScroll]);

  // Estilo para dispositivos móviles
  const mobileStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginTop: navbarHeight ? `${navbarHeight}px` : '0',  // Añadir margen igual a la altura del navbar
    transition: 'none',
  };

  // Estilo para escritorio
  const style = {
    position: 'relative',
    backgroundImage: `url(${lomexBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: scrollY > 0 ? '0vh' : '100vh',
    transition: 'height 0.5s ease-in-out',
  };

  // Estilos para el texto en la imagen
  const textContainerStyle = {
    position: 'absolute',
    bottom: '20px',  // Coloca el texto a 20px desde el fondo
    right: '20px',   // Coloca el texto a 20px desde el borde derecho
    width: 'auto',   // Ajusta el tamaño al contenido
    zIndex: '10',
  };

  const textStyle = {
    textAlign: 'left', // Alineación a la izquierda dentro del contenedor
    color: 'white',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra de texto para mejor visibilidad
  };

  const titleStyle = {
    fontSize: '3rem', // Tamaño para escritorio
    textTransform: 'uppercase', // Asegura que el texto esté en mayúsculas
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    marginTop: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={window.innerWidth <= 768 ? mobileStyle : style}>
      {window.innerWidth <= 768 && (
        <img
          src={lomexBackground}
          alt="Hero"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      )}
      <div style={textContainerStyle} className="hidden lg:block">
        <div style={{ ...textStyle, ...titleStyle }}>LOMEX</div>
        <div style={{ ...textStyle, ...subtitleStyle }}>Optimiza la distribución de tu mercancía</div>
      </div>
    </div>
  );
};

export default HeroImage;
