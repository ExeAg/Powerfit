import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js"
import cors from 'cors'
import http from "http";
import { Server as SocketServer } from "socket.io";
import { resolve, dirname } from "path";
import { PORT } from "./configio.js";

const app = express();

//Middlewares
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(morgan("dev")); //dev es para que muestre un mensaje corto por console
app.use(express.json()); //convierte los req.body en formato JSON
app.use(express.urlencoded({ extended: false }));

app.use(express.static(resolve("/api")));
//Rutas
app.use("/api", authRoutes); //para que todas las authRoutes empiecen con /api
app.use("/api", taskRoutes);

const server = http.createServer(app);
const io = new SocketServer(server, {});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(8),
    });
  });
});

server.listen(PORT);
console.log(`Server on port ${PORT}`);

export default app;
