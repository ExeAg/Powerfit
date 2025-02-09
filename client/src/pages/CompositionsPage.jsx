import { useEffect } from "react";
import { useCompositions } from "../context/CompositionsContext";
import Compositioncard from "../components/Compositioncard";


function CompositionsPage() {
  const { getCompositions, compositions } = useCompositions();

  useEffect(() => {
    getCompositions();
  }, []);


  if (compositions.length === 0) {
    return <h1>No hay composiciones</h1>;
  }

  return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      {compositions.map((composition) => (
        <Compositioncard composition={composition} key={composition._id} />
      ))}
    </div>

  );
}

export default CompositionsPage;