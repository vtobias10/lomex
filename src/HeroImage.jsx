// src/HeroImage.jsx
import { useState, useEffect } from 'react';
// Importamos la imagen desde la carpeta 'assets'
import lomexBackground from './assets/lomexBackground.jpg'; // Asegúrate de que la ruta sea correcta

const HeroImage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Detectar el desplazamiento del scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Actualiza la posición del scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Estilo para el contenedor de la imagen
  const style = {
    position: 'relative',
    backgroundImage: `url(${lomexBackground})`,  // Usamos la imagen importada
    backgroundSize: 'cover',  // Asegura que la imagen cubra todo el área
    backgroundPosition: 'center',  // Centra la imagen
    height: `${Math.max(100 - scrollY / 10, 40)}vh`, // La altura de la imagen disminuye con el scroll
    transition: 'height 0.3s ease',  // Transición suave para el cambio de tamaño
  };

  return (
    <div style={style}>
      {/* Cualquier contenido extra que quieras mostrar encima de la imagen */}
    </div>
  );
};

export default HeroImage;
