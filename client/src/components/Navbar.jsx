import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user);

  return (
    <nav
      className=" text-green-800 my-1 flex justify-between py-1 px-12 "

    >
      <Link to={isAuthenticated ? "/" : "/"}>
        <h1 className="text-4xl font-bold italic">HOMEGYM</h1>
      </Link>
      <ul className="flex gap-x-4">
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/login"
                className="text-2xl text-green-800 font-style: italic bg-black hover:bg-white px-4 py-1 rounded-sm"
              >
                Bienvenido {user.role} {user.username}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-2xl text-green-800 font-style: italic bg-black hover:bg-white px-4 py-1 rounded-sm"
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
              <Link
                to="/"
                className="text-green-800 font italic hover:bg-white px-1 py-1 text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/quienessomos"
                className="text-green-800 font italic hover:bg-white px-1 py-1 text-2xl"
              >
                ¿Quiénes somos?
              </Link>
            </li>
            <li>
              <Link
                to="/testimonios"
                className="text-green-800 font italic hover:bg-white px-1 py-1 text-2xl"
              >
                Testimonios
              </Link>
            </li>
            <li>

              <Link
                to="/login"
                className="text-green-800 font italic hover:bg-white px-1 py-1 text-2xl"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-green-800 font italic hover:bg-white px-1 py-1 text-2xl"
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
