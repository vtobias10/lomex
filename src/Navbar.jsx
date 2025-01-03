// src/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold"><a href="">Lomex</a></div>
        <ul className="flex space-x-8">
          <li><a href="#nosotros" className="hover:text-gray-400">Nosotros</a></li>
          <li><a href="#servicios" className="hover:text-gray-400">Servicios</a></li>
          <li><a href="#clientes" className="hover:text-gray-400">Clientes</a></li>
          <li><a href="#proveedores" className="hover:text-gray-400">Proveedores</a></li>
          <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
