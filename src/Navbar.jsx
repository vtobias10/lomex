// src/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ isFixed, navbarHeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Estilo para dispositivos móviles
  const mobileStyle = 'fixed top-0 left-0 w-full z-50';

  return (
    <nav
      id="navbar"
      className={`bg-white text-[#04294b] p-4 shadow-md transition-all duration-500 ease-in-out
        ${window.innerWidth <= 768 ? mobileStyle : ''}
        ${isFixed ? 'fixed top-0 left-0 w-full z-50' : 'top-0'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <a href="#">Lomex S.A</a>
        </div>

        <div className="hidden lg:flex space-x-8 items-center ml-auto">
          <span>
            <Link
              to="nosotros-titulo" // Ahora apunta al id del título en "Nosotros"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer"
              activeClass="text-[#deb44a]" // Color activo
              spy={true}
            >
              Nosotros
            </Link>
          </span>
          <span>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer"
              activeClass="text-[#deb44a]" // Color activo
              spy={true}
            >
              Servicios
            </Link>
          </span>
          <span>
            <Link
              to="clientes"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer"
              activeClass="text-[#deb44a]" // Color activo
              spy={true}
            >
              Clientes
            </Link>
          </span>
          <span>
            <Link
              to="proveedores"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer"
              activeClass="text-[#deb44a]" // Color activo
              spy={true}
            >
              Proveedores
            </Link>
          </span>
          <span>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer"
              activeClass="text-[#deb44a]" // Color activo
              spy={true}
            >
              Contacto
            </Link>
          </span>
        </div>

        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-[#04294b]">
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

        <div
          className={`lg:hidden space-y-4 absolute top-16 left-0 w-full bg-white transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        >
          <span>
            <Link
              to="nosotros-titulo" // Ahora apunta al id del título en "Nosotros"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer block px-4 py-2"
              onClick={closeMenu}
              activeClass="text-[#deb44a]"
              spy={true}
            >
              NOSOTROS
            </Link>
          </span>
          <span>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer block px-4 py-2"
              onClick={closeMenu}
              activeClass="text-[#deb44a]"
              spy={true}
            >
              SERVICIOS
            </Link>
          </span>
          <span>
            <Link
              to="clientes"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer block px-4 py-2"
              onClick={closeMenu}
              activeClass="text-[#deb44a]"
              spy={true}
            >
              CLIENTES
            </Link>
          </span>
          <span>
            <Link
              to="proveedores"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer block px-4 py-2"
              onClick={closeMenu}
              activeClass="text-[#deb44a]"
              spy={true}
            >
              PROVEEDORES
            </Link>
          </span>
          <span>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="uppercase font-bold text-[#04294b] hover:text-[#deb44a] cursor-pointer block px-4 py-2"
              onClick={closeMenu}
              activeClass="text-[#deb44a]"
              spy={true}
            >
              CONTACTO
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
