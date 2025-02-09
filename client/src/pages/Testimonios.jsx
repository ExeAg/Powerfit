import React from 'react';
import { Link } from 'react-router-dom';

function Testimonios() {
    return (
        <div
            className="bg-image bg-cover flex flex-col items-center justify min-h-screen"
            style={{ backgroundImage: `url(/images/metalInicio.jpg)` }}
        >
            <h1 className="bg-black text-green-800 text-7xl font-bold text-current italic mt-9 px-6">Dean Winchester</h1>
            <img
                src="/images/DeanWinchester.jpg"  // Usa la ruta de la imagen cargada
                alt="Imagen superpuesta"
                className="w-1/3" // Ajuste del tamaño y posición derecha
            />
            <p class=" text-xl font-mono text-justify bg-black text-violet-800 mt-2 italic">Fecha de nacimiento: Marzo 1 de 1978</p>
            <p class=" text-xl font-mono text-justify bg-black text-white mt-2 italic">Gracias a la facilidad de las rutinas adaptables a mi casa de campo,</p>
            <p class=" text-xl font-mono text-justify bg-black text-white mt-2 italic">pude empezar a fortalecer mi ser haciendo ejercicio, sin necesidad de</p>
            <p class=" text-xl font-mono text-justify bg-black text-white mt-2 italic">adquirir lujosas maquinarias donde se consiguen en la ruidosa ciudad.</p>

            <h1 className="bg-black text-green-800 text-7xl font-bold text-current italic mt-9 px-6">Sam Winchester</h1>
            <img
                src="/images/SamWinchester.jpg"  // Usa la ruta de la imagen cargada
                alt="Imagen superpuesta"
                className="w-1/3" // Ajuste del tamaño y posición derecha
            />
            <p class=" text-xl font-mono text-justify bg-black text-violet-800 mt-2 italic">Fecha de nacimiento: Julio 19 de 1982</p>
            <p class=" text-xl font-mono text-justify bg-black text-white mt-2 italic">Después de llevar a cabo las dietas propuestas por el servicio que me</p>
            <p class=" text-xl font-mono text-justify bg-black text-white mt-2 italic">brindó la app, sentí mi alma volver a renacer en cada espiritu de los</p>
            <p class=" text-xl font-mono text-justify bg-black text-white mt-2 italic">seres vivos, viendo como evolucionaba cada particula de mi cuerpo.</p>
        </div>

    )
}

export default Testimonios