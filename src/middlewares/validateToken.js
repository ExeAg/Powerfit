//----Esta carpeta se crea para poder decirles que rutas están protegidas por usuarios identificados.
//-- Si está autenticado va a pasar, sino nos va a tirar error.

import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

//Validación de Token
export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No hay token, acceso denegado" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalido" });

    req.user = user;

    next();
  }); 
};
