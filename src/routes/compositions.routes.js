import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getCompositions,
  getComposition,
  createComposition,
  updateComposition,
  deleteComposition,
} from "../controllers/compositions.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCompositionSchema } from "../schemas/composition.schema.js";

const router = Router();

//CRUD
router.get("/compositions", authRequired, getCompositions); //OBTENER
router.get("/compositions/:id", authRequired, getComposition); //OBTENER UNO SOLO
router.post("/compositions", authRequired, validateSchema(createCompositionSchema), createComposition); //CREAR
router.delete("/compositions/:id", authRequired, deleteComposition); //ELIMINAR UNO SOLO
router.put("/compositions/:id", authRequired, updateComposition); //ACTUALIZAR UNO SOLO

export default router;