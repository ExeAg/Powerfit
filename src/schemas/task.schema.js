import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }),
    name: z.string({
    required_error: "El name es requerido",
  }),
  description: z
    .string({
      required_error: "La descripción tiene que ser una cadena de caracteres",
    }),
  date1: z.string().datetime().optional(),
});
