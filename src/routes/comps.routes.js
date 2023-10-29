import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getComps,
    getComp,
    createComp,
    updateComp,
    deleteComp
} from "../controllers/comps.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCompSchema } from "../schemas/comp.schema.js";

const router = Router();
router.get("/comps", authRequired, getComps);
router.get("/comps/:id", authRequired, getComp);
router.post("/comps",
    authRequired,
    validateSchema(createCompSchema),
    createComp);
router.delete("/comps/:id", authRequired, deleteComp);
router.put("/comps/:id", authRequired, updateComp);
export default router;