import { useTasks } from "../context/TasksContext";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function Taskcard({ task }) {
  const { deleteTask } = useTasks();
  const [videoUrl, setVideoUrl] = useState(""); // Estado para almacenar la URL del video embebido

  useEffect(() => {
    extractYoutubeUrl(task.title); // Ejecutar cuando se carga la tarjeta
  }, [task.title]);

  const extractYoutubeUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);

    if (match) {
      const videoId = match[1];
      setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
    }
  };

  return (
    <div
    className={`bg-black text-white rounded-md border-2 border-green-800 ${
      videoUrl ? "w-[560px]" : "w-full"
    } py-4 px-10`} // Ajusta el ancho al del video si hay uno
    style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <header className="flex justify-between">
        
        <div className="flex gap-x-2 items-center">
          <button
            className="text-green-800 font-style: italic bg-black hover:bg-red-950 px-4 py-1 rounded-sm"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Borrar
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="text-violet-800 font-style: italic bg-black hover:bg-white px-4 py-1 rounded-sm"
          >
            Editar
          </Link>
        </div>
      </header>
      <p className="text-slate-300">Tipo de runtina: {task.name}</p>
      <p className="text-slate-300">Detalles de rutina: {task.description}</p>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>

      {/* Mostrar el video si el enlace es válido */}
      {videoUrl && (
        <div className="mt-4">
          <iframe
            width="480"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Taskcard;
