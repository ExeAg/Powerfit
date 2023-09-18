import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

//CRUD
router.get("/tasks", authRequired, getTasks); //OBTENER
router.get("/tasks/:id", authRequired, getTask); //OBTENER UNO SOLO
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
); //CREAR
router.delete("/tasks/:id", authRequired, deleteTask); //ELIMINAR UNO SOLO
router.put("/tasks/:id", authRequired, updateTask); //ACTUALIZAR UNO SOLO

export default router;
