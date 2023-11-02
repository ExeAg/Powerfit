import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import compRoutes from "./routes/comps.routes.js";
import cors from 'cors';
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

app.use(express.static(resolve("/")));
//Rutas
app.use("/api", authRoutes); //para que todas las authRoutes empiecen con /api
app.use("/api", taskRoutes);
app.use("/api", compRoutes);

const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    credentials: true
  }
});

const connectedUsers = {}; // Un objeto para almacenar los nombres de usuario de usuarios conectados

io.on("connection", (socket) => {
  console.log("este id",socket.id);

  socket.on("user_connected", (userName) => {
    console.log("Este es el nombre del User:",userName)
    connectedUsers[socket.id] = userName; // Asignar el nombre de usuario al socket.id
  });

  socket.on("message", (message) => {
    // Obtener el nombre del usuario del objeto connectedUsers
    const userName = connectedUsers[socket.id];

    socket.broadcast.emit("message", {
      body: message,
      from: userName, // Utilizar el nombre del usuario
    });
  });

  socket.on("disconnect", () => {
    // Eliminar al usuario de connectedUsers cuando se desconecte
    delete connectedUsers[socket.id];
  });
});


server.listen(PORT);
console.log(`Server on port ${PORT}`);

export default app;
