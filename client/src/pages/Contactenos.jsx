import { Link } from 'react-router-dom';
import React from 'react';

function Contactenos() {

    return (
        <div
            className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
            style={{ backgroundImage: `url(/images/imagenDeFondo.jpg)` }}
        >
            <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                <div className="bg-black text-white rounded-md border-2 border-green-800 py-5 px-10 bg-opacity-70"
                    style={{ backgroundImage: `url(/images/.jpg)` }}>
                    <h1 className="text-4xl text-center font-bold my-2">Contactenos</h1>

                    <label htmlFor="Nombre"></label>
                    <input
                        type="text"

                        placeholder="Nombre"

                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />

                    <label htmlFor="Mail"></label>
                    <input
                        type="text"

                        placeholder="Correo electrónico"

                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />

                    <label htmlFor="Mensaje"></label>
                    <input
                        type="text"

                        placeholder="Escribe su mensaje..."

                        className="w-full bg-zinc-700 text-white px-4 py-10 rounded-md my-2"
                        autoFocus
                    />
                    <Link to="/">
                        <button className="text-green-800 text-2xl italic bg-black hover:bg-white px-4 py-1 rounded-sm border">
                            Enviar
                        </button>
                    </Link>
                    <h1 className="text-4xl text-center font-bold my-2">Siguenos</h1>
                    <div className="flex gap-3 mt-6 justify-center">
                        <a href="https://www.facebook.com/groups/170304160309577" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/facebook.png"
                                alt="Facebook logo"
                                className="w-14" // Ajuste del tamaño
                            />
                        </a>
                        <a href="https://www.instagram.com/ejercios_encasa/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/Instagram.png"
                                alt="Facebook logo"
                                className="w-14" // Ajuste del tamaño
                            />
                        </a>
                        <a href="https://www.youtube.com/@EjerciciosencasaEs/videos" target="_blank" rel="">
                            <img
                                src="/images/YouTube.png"
                                alt="Facebook logo"
                                className="w-14" // Ajuste del tamaño
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactenos;