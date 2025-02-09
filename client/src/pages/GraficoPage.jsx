import { useEffect } from "react";
import { useCompositions } from "../context/CompositionsContext";
import Graficocard from "../components/Graficocard";

function GraficoPage() {
  const { getCompositions, compositions } = useCompositions();

  useEffect(() => {
    getCompositions();
  }, []);

  
  if (compositions.length === 0) { 
    return <h1>No hay grafico</h1>;
  }

  return (
    <div
      className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      {compositions.map((composition) => (
        <Graficocard composition={composition} key={composition._id} />
      ))}
    </div>
  );
}

export default GraficoPage;