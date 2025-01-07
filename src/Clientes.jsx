import React from 'react';
import Slider from 'react-slick';

// Importar tus imágenes
import quilmesLogo from './assets/quilmesLogo.png';
import agdLogo from './assets/agdLogo.png';
import acaLogo from './assets/acaLogo.png';
import aguasdanoneLogo from './assets/aguasdanoneLogo.jpg';
import atanorLogo from './assets/atanorLogo.jpg';
import cargillLogo from './assets/cargillLogo.png';
import citrusvilLogo from './assets/citrusvilLogo.jpg';
import engordarLogo from './assets/engordarLogo.jpg';
import ingeniolealesLogo from './assets/ingeniolealesLogo.jpg';
import lapachoamarilloLogo from './assets/lapachoamarilloLogo.png';
import ledesmaLogo from './assets/ledesmaLogo.png';
import leysebLogo from './assets/leysebLogo.jpg';
import morgansteinLogo from './assets/morgansteinLogo.png';
import ramontumaLogo from './assets/ramontumaLogo.jpg';
import safLogo from './assets/safLogo.jpg';
import tabacalagroindustriaLogo from './assets/tabacalagroindustriaLogo.jpg';
import tecsolparLogo from './assets/tecsolparLogo.png';
import vilucoLogo from './assets/vilucoLogo.jpg';

const Clientes = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Mostrar 3 imágenes a la vez en escritorio
    slidesToScroll: 1,
    autoplay: true,  // Activar el desplazamiento automático
    autoplaySpeed: 3000,  // 3 segundos de intervalo
    arrows: true,  // Activar las flechas
    dots: true,  // Mostrar los puntos de navegación
    adaptiveHeight: true,
    centerMode: false, // Desactivamos el centro de las cards
    centerPadding: '0', // Sin padding adicional
    responsive: [
      {
        breakpoint: 1024,  // Para pantallas de escritorio
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  // Para pantallas de tablet o más pequeñas
        settings: {
          slidesToShow: 1,  // Solo 1 imagen por vez en móviles
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
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
  };

  return (
    <div className="py-16 px-4 bg-gray-50 mt-12 w-full overflow-hidden">
      <h2 className="text-4xl font-bold text-black mb-8 text-center">Nuestros Clientes</h2>
      <Slider {...settings}>
        {/* Repetir esta estructura para cada logo */}
        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.quilmes.com.ar/" target="_blank" className="w-full h-full block">
              <img src={quilmesLogo} alt="Quilmes Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Quilmes</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.agd.com.ar/es" target="_blank" className="w-full h-full block">
              <img src={agdLogo} alt="AGD Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">AGD Alimentos Naturales</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.acacoop.com.ar/" target="_blank" className="w-full h-full block">
              <img src={acaLogo} alt="ACA Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Asociación de Coop. Argentinas</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.danone.com/" target="_blank" className="w-full h-full block">
              <img src={aguasdanoneLogo} alt="Aguas Danone Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Aguas Danone</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.albaugh.com/ar" target="_blank" className="w-full h-full block">
              <img src={atanorLogo} alt="Atanor Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Atanor</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.cargillargentina.com.ar/" target="_blank" className="w-full h-full block">
              <img src={cargillLogo} alt="Cargill Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Cargill</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://citrusvil.com.ar/" target="_blank" className="w-full h-full block">
              <img src={citrusvilLogo} alt="Citrusvil Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Citrusvil</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://engordar.com.ar/" target="_blank" className="w-full h-full block">
              <img src={engordarLogo} alt="Engordar Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Engordar</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://grupobudeguer.com/ne-leales-2022/" target="_blank" className="w-full h-full block">
              <img src={ingeniolealesLogo} alt="Ingenio Leales Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Ingenio Leales</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://lapachoamarillo.com/" target="_blank" className="w-full h-full block">
              <img src={lapachoamarilloLogo} alt="Lapacho Amarillo Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Lapacho Amarillo</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.ledesma.com.ar/" target="_blank" className="w-full h-full block">
              <img src={ledesmaLogo} alt="Ledesma Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Ledesma</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img src={leysebLogo} alt="Leyseb Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Leyseb</h3>
              </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.amsmorgan.com.ar/" target="_blank" className="w-full h-full block">
              <img src={morgansteinLogo} alt="Morganstein Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Morgan Stein</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://prosalta.org.ar/oferta/oferta-exportable/ramon-tuma/" target="_blank" className="w-full h-full block">
              <img src={ramontumaLogo} alt="Ramontuma Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Ramon Tuma</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.cuitonline.com/detalle/30710918828/south-american-foods-s.r.l.html" target="_blank" className="w-full h-full block">
              <img src={safLogo} alt="Saf Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">South American Food</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="http://www.tabacal.com.ar/inicio.php" target="_blank" className="w-full h-full block">
              <img src={tabacalagroindustriaLogo} alt="Tabacal Agroindustria Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Tabacal Agroindustria</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://www.tecsolpar.com/" target="_blank" className="w-full h-full block">
              <img src={tecsolparLogo} alt="Tecsolpar Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Tecsolpar</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <a href="https://viluco.com.ar/" target="_blank" className="w-full h-full block">
              <img src={vilucoLogo} alt="Viluco Logo" className="w-full h-40 object-contain mx-auto" />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Viluco</h3>
              </div>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Clientes;
