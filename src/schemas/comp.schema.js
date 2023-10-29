import { z } from "zod";

export const createCompSchema = z.object({
    altura: z.number({
        required_error: "Altura requerida, debe ser valor numérico.",
    }),
    peso: z.number({
        required_error: "Peso requerida, debe ser valor numérico.",
    }),
    grasa: z.number({
        required_error: "Porcentaje de Grasa requerido, debe ser valor numérico.",
    }),
    agua: z.number({
        required_error: "Agua corporal requerida, debe ser valor numérico.",
    }),
    viceral: z.number({
        required_error: "Grasa Viceral requerida, debe ser valor numérico.",
    }),
    musculo: z.number({
        required_error: "Comp Muscular requerida, debe ser valor numérico.",
    }),
    proteinas: z.number({
        required_error: "Cantidad de Proteinas requerida, debe ser valor numérico.",
    }),
    basal: z.number({
        required_error: "Metabolismo basar requerido, debe ser valor numérico.",
    }),
    hueso: z.number({
        required_error: "Estructura ósea requerida, debe ser valor numérico.",
    }),
});
