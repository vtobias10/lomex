import React from 'react';
import Slider from 'react-slick';

// Importar tus imágenes
import quilmesLogo from './assets/quilmesLogo.png';
import agdLogo from './assets/agdLogo.png';
import acaLogo from './assets/acaLogo.png';

const Clientes = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Mostrar 3 imágenes a la vez
    slidesToScroll: 1,
    autoplay: true,  // Activar el desplazamiento automático
    autoplaySpeed: 3000,  // 3 segundos de intervalo
    arrows: true,  // Activar las flechas
    dots: true,  // Mostrar los puntos de navegación
    adaptiveHeight: true,
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-white bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-600">
        &rarr;
      </button>
    ),
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-white bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-600">
        &larr;
      </button>
    ),
    centerMode: false, // Desactivamos el centro de las cards
    centerPadding: '0', // Sin padding adicional
  };

  return (
    <div className="py-16 px-4 bg-gray-50 mt-12 w-full overflow-hidden"> {/* Fondo gris claro, margen superior y ancho completo */}
      <Slider {...settings}>
        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src={quilmesLogo} alt="Quilmes Logo" className="w-full h-40 object-contain mx-auto" /> {/* Ajuste de la imagen */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Quilmes</h3>
              <p className="text-sm text-gray-500">Descripción o más detalles del producto.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src={agdLogo} alt="AGD Logo" className="w-full h-40 object-contain mx-auto" /> {/* Ajuste de la imagen */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">AGD</h3>
              <p className="text-sm text-gray-500">Descripción o más detalles del producto.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src={acaLogo} alt="ACA Logo" className="w-full h-40 object-contain mx-auto" /> {/* Ajuste de la imagen */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">ACA</h3>
              <p className="text-sm text-gray-500">Descripción o más detalles del producto.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Clientes;
