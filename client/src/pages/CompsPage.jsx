import { useEffect } from "react";
import { useComps } from "../context/CompsContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightScale, faPersonArrowUpFromLine, faBurger, faBottleWater, faXRay, faDumbbell, faEgg, faFire, faBone, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function CompsPage() {
  const { getComps, comps, deleteComp } = useComps();


  useEffect(() => {
    getComps();
  }, []);

  if (comps.length === 0) return (<h1>No hay ninguna composición corporal cargada</h1>)

  return (
    <div>
      {comps.map((comp) => (
        <div key={comp._id} className="bg-zinc-800 max-w-md w-full p-4 rounded-md mb-4">
          <h2 className="text-3xl font-bold text-center mb-4">Composición Corporal</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 mb-4 pr-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faPersonArrowUpFromLine} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Altura</h1>
                  <p>{comp.altura} cm</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faWeightScale} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Peso</h1>
                  <p className="mb-4">{comp.peso} kg</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faBurger} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Grasa Corporal</h1>
                  <p className="mb-4">{comp.grasa} %</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faBottleWater} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Nivel de Agua</h1>
                  <p className="mb-4">{comp.agua} %</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faXRay} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Grasa Visceral</h1>
                  <p className="mb-4">{comp.viceral} puntos</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faDumbbell} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Masa Muscular</h1>
                  <p className="mb-4">{comp.musculo} kg</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faEgg} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Proteínas</h1>
                  <p className="mb-4">{comp.proteinas} %</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faFire} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Metabolismo Basal</h1>
                  <p className="mb-4">{comp.basal} kcal</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faBone} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Masa ósea</h1>
                  <p className="mb-4">{comp.hueso} kg</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#278c41" }} className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Fecha de Registro</h1>
                  <p className="mb-4">{new Date(comp.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              key={comp._id} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => {
                deleteComp(comp._id);
              }}
            >
              Borrar
            </button>
            <Link to={`/editar/${comp._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Editar
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompsPage