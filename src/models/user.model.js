import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true, //Es requerido
      trim: true, //Limpia espacios en blanco
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true, //Dato único
    },
    password: {
      type: String,
      require: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
    dni: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true, //para visualizar la fecha de creacion o modificacion de cada User
  }
);

export default mongoose.model("User", userSchema);
