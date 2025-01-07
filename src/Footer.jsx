// src/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black py-16 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">

        {/* Card para el mapa a la izquierda más alejado */}
        <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.784911098539!2d-65.2960179!3d-26.814976500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c13998be2a7%3A0xa57ed6e68f6152de!2sLOMEX%20SA%20-%20Transporte%20Automotor%20de%20Cargas!5e0!3m2!1ses-419!2sar!4v1735886840171!5m2!1ses-419!2sar"
            width="100%" height="350" style={{ border: "0" }} allowFullScreen="" loading="lazy"
          ></iframe>
        </div>

        {/* Información de contacto a la derecha */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          {/* Información de contacto en fila */}
          <div className="flex flex-wrap gap-12 justify-between">
            {/* Información Administración Central */}
            <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Administración Central</h3>
              <p>Fermín Cariola 1838</p>
              <p>T4107CSL | Yerba Buena | Tucumán</p>
              <p>
                <a href="tel:+543814848058" className="text-blue-600">T. +54 381 484-8058</a>
              </p>
              <p>
                <a href="mailto:info@lomex.com.ar" className="text-blue-600">info@lomex.com.ar</a>
              </p>
            </div>

            {/* Información PLOT - Parque Logístico Tucumán */}
            <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">PLOT - Parque Logístico Tucumán</h3>
              <p>Av. Circunvalación Ruta Nacional 38 Km 2</p>
              <p>4000 | San Miguel de Tucumán | Tucumán</p>
              <p>
                <a href="tel:+543812015156" className="text-blue-600">T. +54 381 201-5156</a>
              </p>
              <p>
                <a href="mailto:plot@lomex.com.ar" className="text-blue-600">plot@lomex.com.ar</a>
              </p>
            </div>

            {/* Información Sucursal CABA */}
            <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Sucursal CABA</h3>
              <p>Jerónimo Salguero 3451</p>
              <p>Depósito Ledesma Retiro Norte</p>
              <p>C1425DFF | Ciudad Autónoma de Buenos Aires</p>
              <p>
                <a href="tel:+541125585159" className="text-blue-600">T. +54 11 2558-5159</a>
              </p>
              <p>
                <a href="mailto:caba@lomex.com.ar" className="text-blue-600">caba@lomex.com.ar</a>
              </p>
            </div>

            {/* Información Sucursal Ledesma */}
            <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Sucursal Ledesma</h3>
              <p>Av. Soberanía Nacional y Ruta 34</p>
              <p>Y4512HMN | Ledesma | Jujuy</p>
              <p>
                <a href="tel:+543886430234" className="text-blue-600">T. +54 3886 43-0234</a>
              </p>
              <p>
                <a href="mailto:ledesma@lomex.com.ar" className="text-blue-600">ledesma@lomex.com.ar</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center font-bold mt-8">
        <p>&copy; 2025 LOMEX S.A. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
