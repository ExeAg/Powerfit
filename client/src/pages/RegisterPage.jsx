import { useForm } from "react-hook-form"; // Nos da funciones qque se pueden volver a utilizar
//import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Extrae los errores.
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks"); // Nos manda a la rutas de tareas.
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div
      className="bg-image bg-cover flex flex-col items-center min-h-screen"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <div className="flex h-[calc(100vh-100px)] items-center justify-center px-80">
        <div className="bg-black bg-opacity-80  text-white rounded-md border-2 border-green-800 p-9 px-44 -mb-40 
        py-1"
          style={{ backgroundImage: `url(/images/imagenParaPagina.jp)` }}>
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-3xl text-center font-bold my-2">Register</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my 4"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}

            <input
              type="text"
              {...register("fullname", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Fullname"
            />
            {errors.fullname && (
              <p className="text-red-500">fullname is required</p>
            )}
            <input
              type="text"
              {...register("age", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Age"
            />
            {errors.age && <p className="text-red-500">age is required</p>}
            <input
              type="text"
              {...register("dni", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Dni"
            />
            {errors.dni && <p className="text-red-500">dni is required</p>}


            {/* Revisar el select */}
            <select
              {...register("role", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            >
              <option value="Admin">Administrador</option>
              <option value="Alumno">Alumno</option>
              <option value="Profesor">-</option>

            </select>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">email is required</p>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">password is required</p>
            )}
            <button type="submit" className="text-green-800 font-style: italic bg-black hover:bg-white px-4 py-1  border rounded-sm">Aceptar</button>
            {errors.role && <p className="text-red-500">Role is required</p>}

          </form>
          <Link to="/login" className="font-style: italic scroll-px-px text-1xl hover:bg-green-800">
            ¿Ya tienes una cuenta?
          </Link>

        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
