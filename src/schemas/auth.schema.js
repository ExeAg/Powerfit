import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El usuario es requerido",
  }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "Email inválido",
    }),
  password: z
    .string({
      required_error: "El password es requerido",
    })
    .min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
  fullname: z.string({
    required_error: "El nombre completo es requerido",
  }),
  age: z
    .string({
      required_error: "La edad es requerida",
    })
    .min(1, {
      message: "Edad inválida",
    })
    .max(120, {
      message: "Edad inválida",
    }),
  dni: z
    .string({
      required_error: "El DNI es requerido",
    })
    .refine(
      (value) => {
        const dniString = value.toString(); // Convertimos el número a cadena
        return dniString.length === 8 && !isNaN(value); // Verificamos la longitud y que sea un número
      },
      {
        message: "El DNI debe tener 8 dígitos",
      }
    ),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "Email inválido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
});
