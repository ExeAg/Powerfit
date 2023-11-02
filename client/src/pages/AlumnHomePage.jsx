import { Link } from "react-router-dom";

function AlumnHomePage() {
  return (
    <div>
      <Link to={`/chat`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Chat
      </Link>
      <div>
      <Link to={`/add-comp`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Agregar Composición corporal
      </Link>
      <div>
      <Link to={`/comps`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Ver Composiciones corporal
      </Link></div>
      </div>
      </div>
  )
}

export default AlumnHomePage