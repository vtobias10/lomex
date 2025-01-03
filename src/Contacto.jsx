// src/Contacto.jsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    ciudad: '',
    provincia: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tu servicio de EmailJS
    emailjs.sendForm(
      'service_o1iqga6',  // Reemplaza con tu service_id de EmailJS
      'template_5rb978i',  // Reemplaza con tu template_id de EmailJS
      e.target,  // Aquí se obtiene el formulario
      'alRR1xnT8IOG9U3KX'  // Reemplaza con tu user_id de EmailJS
    )
    .then(
      (result) => {
        alert('¡Mensaje enviado exitosamente!');
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          ciudad: '',
          provincia: '',
          asunto: '',
          mensaje: '',
        });
      },
      (error) => {
        alert('Hubo un error, por favor intente de nuevo.');
      }
    );
  };

  return (
    <div className="py-16 px-4 bg-gray-50 mt-12">
      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Contacto</h2>
        <p className="text-lg text-gray-600">Por favor, completa el siguiente formulario y nos pondremos en contacto contigo.</p>
      </div>

      {/* Formulario */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo: Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Campo: Empresa */}
            <div>
              <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700">Empresa</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Campo: Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Campo: Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Campo: Ciudad */}
            <div>
              <label htmlFor="ciudad" className="block text-sm font-semibold text-gray-700">Ciudad</label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Campo: Provincia */}
            <div>
              <label htmlFor="provincia" className="block text-sm font-semibold text-gray-700">Provincia</label>
              <input
                type="text"
                id="provincia"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            {/* Campo: Asunto */}
            <label htmlFor="asunto" className="block text-sm font-semibold text-gray-700">Asunto *</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            {/* Campo: Mensaje */}
            <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
