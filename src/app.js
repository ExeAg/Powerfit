import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js"
import cors from 'cors'

const app = express();

//Middlewares
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(morgan("dev")); //dev es para que muestre un mensaje corto por console
app.use(express.json()); //convierte los req.body en formato JSON

//Rutas
app.use("/api", authRoutes); //para que todas las authRoutes empiecen con /api
app.use("/api", taskRoutes);

export default app;
