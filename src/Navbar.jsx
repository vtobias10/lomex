// src/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importar el componente Link de react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Función para cerrar el menú al hacer clic en un botón

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold">
          <a href="#">Lomex</a>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex space-x-8 items-center ml-auto"> {/* Asegura que los botones estén alineados a la derecha */}
          <span>
            <Link
              to="nosotros"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
            >
              Nosotros
            </Link>
          </span>
          <span>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
            >
              Servicios
            </Link>
          </span>
          <span>
            <Link
              to="clientes"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
            >
              Clientes
            </Link>
          </span>
          <span>
            <Link
              to="proveedores"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
            >
              Proveedores
            </Link>
          </span>
          <span>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
            >
              Contacto
            </Link>
          </span>
        </div>

        {/* Mobile menu */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu (desplegable) */}
        <div
          className={`lg:hidden space-y-4 absolute top-16 left-0 w-full bg-black transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        >
          <span>
            <Link
              to="nosotros"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer block px-4 py-2"
              onClick={closeMenu} // Cerrar el menú al hacer clic
            >
              Nosotros
            </Link>
          </span>
          <span>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer block px-4 py-2"
              onClick={closeMenu} // Cerrar el menú al hacer clic
            >
              Servicios
            </Link>
          </span>
          <span>
            <Link
              to="clientes"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer block px-4 py-2"
              onClick={closeMenu} // Cerrar el menú al hacer clic
            >
              Clientes
            </Link>
          </span>
          <span>
            <Link
              to="proveedores"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer block px-4 py-2"
              onClick={closeMenu} // Cerrar el menú al hacer clic
            >
              Proveedores
            </Link>
          </span>
          <span>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer block px-4 py-2"
              onClick={closeMenu} // Cerrar el menú al hacer clic
            >
              Contacto
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
