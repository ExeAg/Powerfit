import { useForm } from "react-hook-form"
import { useComps } from "../context/CompsContext"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CompFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createComp, getComp } = useComps();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadComp() {
      if (params.id) {
        const comp = await getComp(params.id);
        console.log(comp);
        setValue("altura", comp.altura);
        setValue("peso", comp.peso);
        setValue("grasa", comp.grasa);
        setValue("agua", comp.agua);
        setValue("viceral", comp.viceral);
        setValue("musculo", comp.musculo);
        setValue("proteinas", comp.proteinas);
        setValue("basal", comp.basal);
        setValue("hueso", comp.hueso);
      }
    }
    loadComp();
  }, [])

  const onSubmit = handleSubmit((data) => {
    createComp(data);
    navigate("/comps");
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center" style={{ marginTop: '150px' }}>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="altura">Altura:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("altura")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="peso">Peso:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("peso")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="grasa">Grasa Corporal:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("grasa")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="agua">Nivel de Agua:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("agua")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="viceral">Grasa Viceral:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("viceral")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="musculo">Masa Muscular:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("musculo")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="proteinas">Proteínas:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("proteinas")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="basal">Metabolismo Basal:</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("basal")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="hueso">Masa ósea:</label>
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