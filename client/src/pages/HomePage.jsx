import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      className="bg-image bg-cover flex flex-col items-center justify min-h-screen"
      style={{ backgroundImage: `url(/images/ImagenDeFondo.jpg)` }}
    >
      <h1 className="bg-black text-green-800 text-7xl font-bold italic text-current mt-6 px-6">BIENVENIDO A HOMEGYM</h1>
      <p className="bg-black italic text-green-800 mt-2 text-2xl">Haciendo de su hogar un campo de entrenamiento</p>
      <img
        src="/images/Negro.png"  // Usa la ruta de la imagen cargada
        alt="Imagen superpuesta"
        className="w-1/2 px-16 " // Ajuste del tamaño y posición derecha
      />
      <div className="columns-1">
        <Link to="/demostracion">
          <button className="bg-black text-green-800 px-6 py-3 -my-20 border-2 border-green-800 hover:bg-white text-2xl italic ">Demostración</button>
        </Link>
        <Link to='/contactenos'>
          <button className="bg-black text-violet-800 px-5 py-3 -my-20 border-2 border-violet-800 hover:bg-white text-2xl italic ">Contactenos</button>
        </Link>

      </div>
     

    </div>
  );
}

export default HomePage;
