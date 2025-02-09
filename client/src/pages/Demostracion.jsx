import React from "react";

function Demostracion() {
  return (
    <div
      className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(/images/ImagenDeFondo.jpg)` }}
    >
      <header className="flex flex-row items-center gap-14 p-4 border border-green-800 rounded-lg bg-black bg-opacity-70">
        
        {/* Título y Descripción */}
        <div className="flex flex-col text-left">
          <h1 className="text-3xl font-bold text-white font-sans italic">Ejercitar antebrazo</h1>
          <p className="text-white mt-2 italic">Ejercicios claves para entrenar atenbrazos.</p>
        </div>

        {/* Video */}
        <iframe
          className="w-96 h-56 rounded-md border border-gray-500"
          src="https://www.youtube.com/embed/ctD3hiPEan4"
          title="YouTube video"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        
      </header>
      <header className="flex flex-row items-center gap-6 p-4 border border-green-800 rounded-lg bg-black bg-opacity-70">
        
        {/* Título y Descripción */}
        <div className="flex flex-col text-left">
          <h1 className="text-3xl font-bold text-white font-sans italic">Eliminar grasa abdominal</h1>
          <p className="text-white mt-2">Alguna variedad de ejercicios para eliminar</p>
          <p className="text-white mt-2"> la grasa abdominal.</p>
        </div>

        {/* Video */}
        <iframe
          className="w-96 h-56 rounded-md border border-gray-500"
          src="https://www.youtube.com/embed/Qy67SlpJTnw"
          title="YouTube video"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        
      </header>
      <header className="flex flex-row items-center gap-6 p-4 border border-green-800 rounded-lg bg-black bg-opacity-70">
        
        {/* Título y Descripción */}
        <div className="flex flex-col text-left">
          <h1 className="text-3xl font-bold text-white font-sans">Algunas comidas sin  </h1>
          <h1 className="text-3xl font-bold text-white font-sans"> calorias</h1>
          <p className="text-white mt-2">Comer alimentos bajos en calorías es la manera</p>
          <p className="text-white mt-2"> fácil para lograr esta meta</p>

        </div>

        {/* Video */}
        <iframe
          className="w-96 h-56 rounded-md border border-gray-500"
          src="https://www.youtube.com/embed/EH5eippjJoQ"
          title="YouTube video"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        
      </header>
      <header className="flex flex-row items-center gap-6 p-4 border border-green-800 rounded-lg bg-black bg-opacity-70">
        
        {/* Título y Descripción */}
        <div className="flex flex-col text-left">
          <h1 className="text-3xl font-bold text-white font-sans">Pesas caseras</h1>
          <p className="text-white mt-2">Aprendiendo a crear pesas con cosas de su casa</p>
        </div>

        {/* Video */}
        <iframe
          className="w-96 h-56 rounded-md border border-gray-500"
          src="https://www.youtube.com/embed/sgB-Gz2FFZs"
          title="YouTube video"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        
      </header>
    </div>
  );
}

export default Demostracion;




