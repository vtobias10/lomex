// src/App.jsx

import { useState } from 'react';
import Navbar from './Navbar';
import Nosotros from './Nosotros';
import Servicios from './Servicios';
import Clientes from './Clientes';
import Proveedores from './Proveedores';
import Contacto from './Contacto';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Nosotros />
      <Servicios />
      <Clientes />
      <Proveedores />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
