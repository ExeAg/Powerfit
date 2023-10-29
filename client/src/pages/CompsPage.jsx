import { useEffect } from "react";
import { useComps } from "../context/CompsContext";

function CompsPage() {
  const { getComps, comps } = useComps();

  useEffect(() => {
    getComps();
  }, []);

  if (comps.length === 0) return(<h1>No hay ninguna composición corporal cargada</h1>)

  return (
    <div>
      {comps.map((comp) => (
        <div key={comp._id}>
          <h1>Altura</h1>
          <p>{comp.altura}</p>
          <h1>Peso</h1>
          <p>{comp.peso}</p>
          <h1>Grasa Corporal</h1>
          <p>{comp.grasa}</p>
          <h1>Nivel de Agua</h1>
          <p>{comp.agua}</p>
          <h1>Grasa Viceral</h1>
          <p>{comp.viceral}</p>
          <h1>Masa Muscular</h1>
          <p>{comp.musculo}</p>
          <h1>Proteínas</h1>
          <p>{comp.proteinas}</p>
          <h1>Metabolismo Basal</h1>
          <p>{comp.basal}</p>
          <h1>Masa ósea</h1>
          <p>{comp.hueso}</p>
        </div>
      ))}
    </div>
  );
}

export default CompsPage