import { z } from "zod";

export const createCompositionSchema = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }),
  name: z.string({
    required_error: "El titulo es requerido",
  }),
  fullname: z.string({
    required_error: "El titulo es requerido",
  }),
  peso: z.string({
    required_error: "El peso es requerido",
  }),
  grasa: z.string({
    required_error: "El peso tiene que ser un número",
  }),
  description: z.string({
    required_error: "La descripción tiene que ser una cadena de caracteres",
  }),
  date: z.string().datetime().optional(),
});


