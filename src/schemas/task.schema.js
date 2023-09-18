import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }),
  description: z
    .string({
      required_error: "La descripción tiene que ser una cadena de caracteres",
    }),
  date: z.string().datetime().optional(),
});
