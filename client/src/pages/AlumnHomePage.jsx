import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function AlumnHomePage() {
  const { user } = useAuth(); // Obtén el usuario desde el contexto

  return (
    <div
      className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <div className="flex flex-row w-full">
        {/* Sección izquierda - Botones */}
        <div className="flex flex-col items-center w-1/2">
          <div className="container mx-auto">
            <Link to="/demostracion">
              <button className="bg-black bg-opacity-80 text-green-800 px-52 py-2 my-5 border-2 border-green-800 hover:bg-white text-xl" >Ver rutina/dieta</button>
            </Link>
          </div>

          <div className="container mx-auto">
            <Link to="/grafico">
              <button className="bg-black bg-opacity-80 text-green-800 px-52 py-2 my-5 border-2 border-green-800 hover:bg-white text-xl">Ver progreso</button>
            </Link>
          </div>

          <div className="container mx-auto">
            <Link to="/Alumn">
              <button className="bg-black bg-opacity-80 text-green-800 px-48 py-2 my-5 border-2 border-green-800 hover:bg-white text-xl">Pagar premiun</button>
            </Link>
          </div>

          <div className="container mx-auto">
            <Link to='/add-composition'>
              <button className="bg-black bg-opacity-80 text-green-800 px-32 py-2 my-5 border-2 border-green-800 hover:bg-white text-xl">Agregar datos específicos</button>
            </Link>
          </div>

          <div className="container mx-auto">
            <Link to='/compositions'>
              <button className="bg-black bg-opacity-80 text-green-800 px-36 py-2 my-5 border-2 border-green-800 hover:bg-white text-xl">Ver ficha personal</button>
            </Link>
          </div>

          <div className="container mx-auto">
            <Link to="/tasksDos">
              <button className="bg-black bg-opacity-80 text-green-800 px-14 py-2 my-5 border-2 border-green-800 hover:bg-white text-xl">Ver rutina/dieta personalizada</button>
            </Link>
          </div>

          <Link to="/chat">
          </Link>
          <div className="container mx-auto">
            <Link to='/chat'>
              <button className="bg-black bg-opacity-80 text-green-800 px-3 py-2 my-5 border-2 border-green-800  hover:bg-white text-xl">Chat</button>
            </Link>
          </div>
        </div>

        {/* Sección derecha - Datos del perfil */}
        <div className="flex flex-col items-center justify-center w-1/2 p-10 bg-black bg-opacity-80 rounded-lg border-2 border-green-800">
          <img src={"images/Aliester.avif"}
            alt="Foto de perfil"
            className="w-40 h-40 rounded-full mb-4" />
          <h2 className="text-2xl font-bold mb-2">Nombre: {user?.username} {user?.fullname}</h2>
          <p className="text-lg">Edad: {user?.age} años</p>
          <p className="text-lg">Mail: {user?.email}</p>
        </div>
      </div>
    </div>


  );
}

export default AlumnHomePage;
