// src/Servicios.jsx

import React from 'react';
import { CubeIcon, TruckIcon, ShareIcon, HomeIcon, MapIcon, ShieldCheckIcon, ArrowsPointingOutIcon, IdentificationIcon, UserGroupIcon, MapPinIcon, UserIcon, CheckBadgeIcon, DocumentTextIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

const Servicios = () => {
  const servicios = [
    { name: "Transporte y distribución de materias primas y productos terminados", icon: <CubeIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Transportes troncales y capilares", icon: <TruckIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Distribuciones en todo el país", icon: <MapIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Trazabilidad", icon: <ShareIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Control potencial de riesgos", icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Provisión de pallets y envases", icon: <ArchiveBoxIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Almacenamiento temporario", icon: <HomeIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Administración de flotas", icon: <ArrowsPointingOutIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Brokers logístico", icon: <IdentificationIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Guardia y seguimiento las 24 hs", icon: <MapPinIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Trato personal", icon: <UserGroupIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Seguro de mercadería y camiones", icon: <CheckBadgeIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Consultoría en distribuciones", icon: <UserIcon className="h-8 w-8 text-blue-500" /> },
    { name: "Servicio de cross docking, consolidación de desconsolidación de carga", icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" /> },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50 mt-12">
      {/* Título de la sección */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">SERVICIOS</h2>
      </div>

      {/* Grid para los servicios, 7 servicios por fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
        {servicios.map((servicio, index) => (
          <div 
            key={index} 
            className="bg-white py-8 px-6 shadow-md rounded-lg flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {/* Círculo con ícono */}
            <div className="p-4 bg-blue-100 rounded-full">
              {servicio.icon}
            </div>
            {/* Descripción del servicio */}
            <div className="text-lg text-gray-700 text-center">{servicio.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
