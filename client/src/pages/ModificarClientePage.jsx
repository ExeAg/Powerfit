import { useEffect } from "react";
import { useCompositions } from "../context/CompositionsContext";
import Compositioncard from "../components/Compositioncard";
import { useAuth } from "../context/AuthContext";
import React from "react";

function ModificarClientePage() {
  const { getCompositions, compositions } = useCompositions();
  const { user, role } = useAuth();

  useEffect(() => {
    getCompositions();
  }, []);

  // Muestra un mensaje si no hay composiciones
  if (compositions.length === 0) {
    return <h1>No hay composiciones</h1>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 py-20 px-10">
      {/* Sección de composiciones */}
      {compositions.map((composition) => (
        <Compositioncard composition={composition} key={composition._id} />
      ))}

      {/* Sección derecha - Datos del perfil del alumno */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10 bg-black bg-opacity-80 rounded-lg border-2 border-green-800">
        <img
          src={"/images/Aliester.avif"}
          alt="Foto de perfil"
          className="w-40 h-40 rounded-full mb-4"
        />

        {/* Sección derecha - Datos del perfil */}
        {role === "Alumn" && (
          <div className="flex flex-col items-center justify-center w-full p-10 bg-black bg-opacity-80 rounded-lg border-2 border-green-800">
            <h2 className="text-2xl font-bold mb-2">
              Nombre: {user?.username} {user?.fullname}
            </h2>
            <p className="text-lg">Edad: {user?.age} años</p>
            <p className="text-lg">Mail: {user?.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModificarClientePage;


