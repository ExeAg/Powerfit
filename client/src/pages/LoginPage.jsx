import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated,role} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      // Realiza un enrutamiento condicional según el 'role' del usuario
      if (role === "Admin") {
        navigate("/admin");
      } else if (role === "Alumno") {
        navigate("/Alumn");
      } else if (role === "Profesor") {
        navigate("/Profesor");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, role, navigate]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold my-2">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500">email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">password is required</p>
          )}

          <button type="submit" className= " bg-green-500 text-white px-4 py-2 rounded-md my-2 ">Login</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-green-500">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
