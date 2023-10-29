import { useForm } from "react-hook-form"
import { useComps } from "../context/CompsContext"

function CompFormPage() {
  const { register, handleSubmit } = useForm();
  const { createComp } = useComps();

  const onSubmit = handleSubmit((data) => {
    createComp(data);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center"style={{ marginTop: '150px' }}>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Altura:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("altura")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="title">Peso:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("peso")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Grasa Corporal:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("grasa")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Nivel de Agua:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("agua")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Grasa Viceral:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("viceral")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Masa Muscular:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("musculo")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Proteínas:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("proteinas")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Metabolismo Basal:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("basal")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="title">Masa ósea:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("hueso")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-indigo-500 px-3 py-2 rounded-md my-2">
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CompFormPage