import { useForm } from "react-hook-form";
import { useCompositions } from "../context/CompositionsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function CompositionsFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createComposition, getComposition, updateComposition } = useCompositions();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadComposition() {
      if (params.id) {
        const composition = await getComposition(params.id);
        setValue("title", composition.title);
        setValue("peso", composition.peso);
        setValue("grasa", composition.grasa);
        setValue("description", composition.description);
        setValue("date", dayjs(composition.date).utc().format("YYYY-MM-DD"))
      }
    }
    loadComposition();
  }, []);



  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      title: data.title ? String(data.title) : "", // Convertir a string de manera explícita
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()

    }

    if (params.id) {
      updateComposition(params.id, dataValid);
    } else {
      createComposition(dataValid);
    }

    navigate("/compositions");


  });

  return (
    <div
      className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <div className="flex h-[calc(100vh-100px)] items-center justify-center px-80">
        <div className="bg-black bg-opacity-80  text-white rounded-md border-2 border-green-800 p-1 px-44 -mb-10"
        >
          <h1 className="text-3xl text-center font-bold my-1 ">Ficha personal</h1>
          <form onSubmit={onSubmit}>

            <label className="px-2">Tipo de rutina</label>
            <select
              {...register("title", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
            >
              <option value="Fisica">Física</option>
              <option value="Dieta">Dieta</option>
            </select>

            <label className="px-2 ">Nombre</label>
            <input
              label type="text"
              id="name"
              placeholder="Escriba su nombre como figura en su perfil..."
              {...register("name", { required: "name es requerido" })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
              autoFocus
            />
            <label className="px-2 ">Apellido</label>
            <input
              label type="text"
              id="fullname"
              placeholder="Escriba su apellido como figura en su perfil..."
              {...register("fullname", { required: "Apellido es requerido" })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
              autoFocus
            />

            <label className="px-2 ">Altura</label>
            <input
              label type="number"
              id="grasa"
              placeholder="Altura en centimetros..."
              {...register("grasa", { required: "Grasa es requerida" })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
              autoFocus
            />

            <label className="px-2 ">Peso</label>
            <input
              type="number"
              id="peso"
              placeholder="Peso en kilogramo..."
              {...register("peso", { required: "Peso es requerido..." })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
              autoFocus
            />


            <label className="px-2 ">Detalle</label>
            <textarea
              rows="3"
              placeholder="Describa su limitación fisica..."
              {...register("description")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
            ></textarea>

            <label htmlFor="date">Fecha de creación</label>
            <input
              type="date"
              id="date"
              {...register("date")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
            />
            
            
            <button className="text-green-800 text-2xl font-style: italic bg-black hover:bg-white px-4 py-1 rounded-sm border">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompositionsFormPage;