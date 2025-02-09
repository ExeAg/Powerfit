import { useCompositions } from "../context/CompositionsContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function Compositioncard({ composition }) {
  const { deleteComposition } = useCompositions();

  return (
    <div
      className="bg-black  text-white rounded-md border-2 border-green-800 py-3 px-10 bg-opacity-80"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold ">Tipo de rutina: {composition.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="text-green-800 italic bg-black hover:bg-red-950 px-4 py-1 rounded-sm"
            onClick={() => {
              deleteComposition(composition._id);
            }}
          >
            Borrar
          </button>
          <Link
            to={`/compositions/${composition._id}`}
            className="text-violet-800 italic bg-black hover:bg-white px-4 py-1 rounded-sm"
          >
            Editar
          </Link>
        </div>
      </header>

      <div className="mb-2">

        <p className="text-slate-300">
          <p className="text-slate-300">
            <strong>Nombre:</strong> {composition.name}
          </p>

          <p className="text-slate-300">
            <strong>Apellido:</strong> {composition.fullname} 
          </p>

          <p className="text-slate-300"></p>
          <strong>Altura:</strong> {composition.grasa} cm
        </p>

        <p className="text-slate-300">
          <strong>Peso:</strong> {composition.peso} kg
        </p>

        <p className="text-slate-300">
          <strong>Detalle:</strong> {composition.description}
        </p>

        <p className="text-slate-300">
          <strong>Fecha:</strong> {dayjs(composition.date).utc().format("DD/MM/YYYY")}
        </p>
      </div>
    </div>
  );
}

export default Compositioncard;

