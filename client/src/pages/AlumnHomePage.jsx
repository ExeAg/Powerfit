import React from "react";
import { Link } from "react-router-dom";

function AlumnHomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6 font-bold text-center">Página de Alumno</h1>
      <Link to="/chat" className="btn btn-blue">
        Chat
      </Link>
      <Link to="/add-comp" className="btn btn-blue">
        Agregar Composición Corporal
      </Link>
      <Link to="/comps" className="btn btn-blue">
        Ver Composiciones Corporales
      </Link>
    </div>
  );
}

export default AlumnHomePage;
