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

  const { signin, errors: signinErrors, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      // Realiza un enrutamiento condicional según el 'role' del usuario
      if (role === "Admin") {
        navigate("/profile");
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
    <div
      className="bg-image bg-cover flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-black text-white rounded-md border-2 border-green-800 py-1 px-10 bg-opacity-70 "
          style={{ backgroundImage: `` }}>
          {signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-3xl text-center font-bold my-2 ">Login</h1>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500" >email is required</p>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">password is required</p>
            )}

            <button type="submit" className="text-green-800 font-style: italic bg-black hover:bg-white px-4  rounded-sm text-2xl py-2 my-5 border-2 border-green-800">Aceptar</button>
          </form>

          
            <Link to="/register" className="font-style: italic scroll-px-px text-1xl hover:bg-green-800">
            ¿No tienes una cuenta?
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
