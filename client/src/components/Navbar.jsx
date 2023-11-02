import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const getDashboardLink = () => {
    if (user.role === "Alumno") {
      return "/Alumn";
    } else if (user.role === "Profesor") {
      return "/Profesor";
    } else if (user.role === "Admin") {
      return "/admin";
    } else {
      return "/";
    }
  };

  return (
    <nav className="bg-green-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={isAuthenticated ? getDashboardLink() : "/"}>
        <h1 className="text-2xl font-bold">PowerFit</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>| Rol: {user.role} |</li>
            {user.role === "Alumno" && (
              <>
              </>
            )}
            {user.role === "Profesor" && (
              <>
                <li>
                  <Link
                    to="/add-task"
                    className="bg-green-700 px-4 py-1 rounded-sm"
                  >
                    Agregar tarea
                  </Link>
                </li>
              </>
            )}
            {user.role === "Admin" && (
              <>
              </>
            )}
            <li>
              <Link
                to="/"
                className="bg-green-700 px-4 py-1 rounded-sm"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-green-700 px-4 py-1 rounded-sm">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-green-700 px-4 py-1 rounded-sm"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
