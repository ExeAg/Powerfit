import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie';
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAutheticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);

      // Verifica si la respuesta y la propiedad data existen
      if (res && res.data) {
        console.log(res.data);
        setUser(res.data);
        setIsAutheticated(true);

        // Verifica si res.data.role existe
        if (res.data.role) {
          setRole(res.data.role);
        } else {
          console.error('El rol no está definido en la respuesta');
        }
      } else {
        console.error('La respuesta no contiene datos');
      }
    } catch (error) {
      console.error('Error al intentar registrar:', error);

      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(['Ha ocurrido un error desconocido']);
      }
    }
  };

  /*const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAutheticated(true);
      setRole(res.data.role);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };
*/
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      // Verifica si la respuesta y la propiedad data existen
      if (res && res.data) {
        console.log(res.data);
        setIsAutheticated(true);
        setUser(res.data);
        // Verifica si res.data.role existe
        if (res.data.role) {
          setRole(res.data.role);
        } else {
          console.error('El rol no está definido en la respuesta');
        }

        // Si tienes un socket emitiendo eventos
        if (socket) {
          socket.emit("user_connected", res.data.username);
        }
      } else {
        console.error('La respuesta no contiene datos');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);

      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(['Ha ocurrido un error desconocido']);
      }
    }
  };

  /*const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      // Verifica si la respuesta y la propiedad data existen
      if (res && res.data) {
        console.log(res);
        setIsAutheticated(true);
        setUser(res.data);

      //Verifica si res.data.role existe
      if (res.data.role) {
        setRole(res.data.role);
      }}
      socket.emit("user_connected", res.data.username);
    } catch (error) {
      if (Array.isArray(error.response.data.username)) {
        return setErrors(error.response.data.username);
      }
      setErrors([error.response.data.message]);
    }
  };
  */

  const logout = () => {
    Cookies.remove("token");
    setIsAutheticated(false);
    setUser(null);
  }

  useEffect(() => { // Elimina los mensajes después de un tiempo.
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) { // Primero comprueba sino hay token
        setIsAutheticated(false); // Si no hay token es posible que la autentificación no esté cargando.
        setLoading(false);
        return setUser(null); // No hay nada en el usuario.
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAutheticated(false);
          setLoading(false);
          return;
        }

        setIsAutheticated(true);
        setUser(res.data);
        setRole(res.data.role);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setIsAutheticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        loading,
        user,
        role,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
