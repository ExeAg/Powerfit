import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

//Middlewares
app.use(morgan("dev")); //dev es para que muestre un mensaje corto por console
app.use(express.json()); //convierte los req.body en formato JSON

//Rutas
app.use("/api", authRoutes); //para que todas las authRoutes empiecen con /api

app.use(cookieParser());

export default app;
