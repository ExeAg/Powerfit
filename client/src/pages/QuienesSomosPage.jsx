import React from 'react';
import { Link } from 'react-router-dom';

function QuienesSomos() {
    return (
        <div
            className="bg-image bg-cover flex flex-col items-center justify min-h-screen"
            style={{ backgroundImage: `url(/images/ImagenDeFondo.jpg)` }}
        >
            <h1 className="bg-black text-green-800 text-7xl font-bold text-current font italic mt-9">¿QUIÉNES SOMOS?</h1>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">¿Has soñado con tener un cuerpo perfecto y salubable?</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">Pero a su vez no se tiene el tiempo necesario, ni tampoco esa estabilidad</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">economica para invertir en actividades fisicas, "ESO SOMOS",la solución</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">a lo anterior mencionado, con nuestra propuesta,"HOMEGYM."</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">Es una App destinada para todas aquellas personas que necesiten</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">llevar su vida a otro nivel.</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">La App ofrece una amplia variedad de funciones, donde cada cliente</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">contará con el seguimiento de profesionales, en el tema de lo saludable,</p>
            <p class=" text-xl text-justify bg-black text-white mt-2 italic">y el ejercicio (nutricionistas y preparadores físicos).</p>
            
        </div>
    )
}

export default QuienesSomos