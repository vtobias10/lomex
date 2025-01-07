// src/Proveedores.jsx

import React from 'react';

const Proveedores = () => {
  return (
    <div className="py-4 px-2 bg-gray-50 mt-12 w-full"> {/* Fondo gris claro, margen superior y ancho completo */}
      
      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mt-12">Proveedores</h2>
      </div>

      {/* Descripción */}
      <div className="text-center mb-2 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700">
          Lomex S.A. se especializa en realizar todos los procesos necesarios para el aprovechamiento de equipos.
          Para ello ofrecemos la selección, dirección y control de personal de conducción a cargo de las unidades,
          mantenimiento, provisión de insumos, control de costos y rendición de cuentas, indicando claramente el rendimiento
          de los equipos, maximizando la utilidad por unidades.
        </p>
        <h3 className='mt-6 font-bold'>Si estás interesado en realizar transporte de alta envergadura, completa el siguiente formulario para que podamos ponernos en contacto.</h3>
      </div>
    </div>
  );
};

export default Proveedores;