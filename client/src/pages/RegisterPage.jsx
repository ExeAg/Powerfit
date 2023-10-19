import { useForm } from "react-hook-form";
//import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2">Register</h1>
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
          <input
            type="text"
            {...register("fullname", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            placeholder="fullname"
          />
          {errors.fullname && (
            <p className="text-red-500">fullname is required</p>
          )}
          <input
            type="text"
            {...register("age", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            placeholder="age"
          />
          {errors.age && <p className="text-red-500">age is required</p>}
          <input
            type="text"
            {...register("dni", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-4"
            placeholder="dni"
          />
          {errors.dni && <p className="text-red-500">dni is required</p>}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md my-2">Registrar</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-green-500">
            Iniciar sesion
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
