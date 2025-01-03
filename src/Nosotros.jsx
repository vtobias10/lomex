// src/Nosotros.jsx

import React from 'react';

const Nosotros = () => {
  return (
    <div className="py-16 px-4 bg-gray-50 mt-12">
      {/* Título principal */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Somos LOMEX</h2>
        <p className="text-xl text-gray-600">Servicio de Transporte y Logística</p>
      </div>

      {/* Sección de introducción con dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Sección: Somos una empresa */}
        <div className="bg-white py-12 px-4 shadow-md rounded-lg">
          <h3 className="text-3xl font-semibold text-black mb-4">Somos una empresa Argentina</h3>
          <p className="text-lg text-gray-700">
            Somos una empresa Argentina orientada a la prestación de servicios de
            Transporte, Distribución, Almacenaje, vinculando las necesidades de los
            clientes y proveedores.
            Originada en el año 2006, a lo largo del tiempo fue diversificando sus
            actividades para conformar una empresa dedicada a las operaciones de logística.
            Teniendo como fortaleza la de optimizar la distribución de la mercadería,
            simplificando procesos logísticos, reduciendo costos y conservando el cuidado
            del Cliente y el resguardo de las Marcas.
          </p>
        </div>

        {/* Sección: Misión */}
        <div className="bg-white py-12 px-4 shadow-md rounded-lg">
          <h3 className="text-3xl font-semibold text-black mb-4">Misión</h3>
          <p className="text-lg text-gray-700">
            Somos una empresa de transporte con amplia experiencia y profesionalidad.
            Brindamos un servicio confiable y eficiente que vincula y coordina las necesidades
            de los clientes con una extensa red de transportistas.
            Ofrecemos una alta capacidad operativa que se adapta a las demandas de cada uno de
            nuestros clientes para satisfacer sus específicas necesidades, mediante el conocimiento
            y la capacitación constante de nuestro personal.
          </p>
        </div>
      </div>

      {/* Sección de atención personalizada y visión en 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sección: Atención personalizada */}
        <div className="bg-white py-12 px-4 shadow-md rounded-lg mb-12">
          <h3 className="text-3xl font-semibold text-black mb-4">Atención personalizada</h3>
          <p className="text-lg text-gray-700">
            Su finalidad como operador logístico integral es facilitar a nuestros clientes el mejor
            asesoramiento, precios y tarifas competitivas. Mantener un control de calidad operativa
            traducido en una atención totalmente personalizada como política integral de nuestra compañía.
            Lomex cuenta con un calificado equipo de trabajo, que permite brindar atención personalizada y
            asistencia ágil y flexible a los requerimientos logísticos.
          </p>
        </div>

        {/* Sección: Visión */}
        <div className="bg-white py-12 px-4 shadow-md rounded-lg mb-12">
          <h3 className="text-3xl font-semibold text-black mb-4">Visión</h3>
          <p className="text-lg text-gray-700">
            Ampliaremos nuestros servicios de transporte y logística a nuevos mercados y
            sectores de actividad a través de una flota de camiones propia y una excelente
            gestión de camiones de terceros.
            El desarrollo del capital humano, la estrecha relación con la red de
            transportistas, las constantes inversiones en tecnología y la mejora continua de
            nuestra gestión serán los factores clave de nuestro desarrollo futuro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
