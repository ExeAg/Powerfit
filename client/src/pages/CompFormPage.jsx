import { useForm } from "react-hook-form"
import { useComps } from "../context/CompsContext"

function CompFormPage() {
  const { register, handleSubmit } = useForm();
  const { createComp } = useComps();

  const onSubmit = handleSubmit((data) => {
    createComp(data);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Altura"
          {...register("altura")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <input
          type="number"
          placeholder="peso"
          {...register("peso")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="grasa"
          {...register("grasa")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="agua"
          {...register("agua")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="viceral"
          {...register("viceral")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="musculo"
          {...register("musculo")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="proteinas"
          {...register("proteinas")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="basal"
          {...register("basal")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="number"
          placeholder="hueso"
          {...register("hueso")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default CompFormPage