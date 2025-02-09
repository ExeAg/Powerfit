import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TasksFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const [videoUrl, setVideoUrl] = useState(""); // Estado para almacenar el enlace embebido

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("name", task.name);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
        extractYoutubeUrl(task.title); // Cargar el video si hay un enlace guardado
      }
    }
    loadTask();
  }, []);

  const extractYoutubeUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);

    if (match) {
      const videoId = match[1];
      setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
    }
  };

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      name: data.name ? String(data.name) : "", // Convertir a string de manera explícita
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    extractYoutubeUrl(data.title); // Extraer y mostrar video en tiempo real

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }

    navigate("/tasks");
  });

  return (
    <div
      className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div
          className="bg-black text-white rounded-md border-2 border-green-800 py-1 px-10"
          style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
        >
          <h1 className="text-2xl text-center font-bold my-2">Rutina/dieta personalizada</h1>
          <form onSubmit={onSubmit}>

          <label className="px-2">Tipo de rutina</label>
            <select
              {...register("name", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            >
              <option value="Fisica">Fisica</option>
              <option value="Dieta">Dieta</option>
            </select>

            <label htmlFor="title"></label>
            <input
              type="text"
              placeholder="Agregar video (o enlace de YouTube)"
              {...register("title")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              autoFocus
            />

            <label htmlFor="description"></label>
            <textarea
              rows="3"
              placeholder="Description"
              {...register("description")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            ></textarea>

            <label htmlFor="date"></label>
            <input
              type="date"
              {...register("date")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />

            <button className="text-green-800 font-style: italic bg-black hover:bg-white px-4 py-1 rounded-sm">
              Guardar
            </button>
          </form>

          {/* Mostrar el video si hay un enlace válido */}
          {videoUrl && (
            <div className="mt-4">
              <iframe
                width="560"
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
      </div>
    </div>
  );
}

export default TasksFormPage;

