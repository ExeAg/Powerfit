import mongoose from "mongoose";

mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    nombreyapellido: {
        type: String,
    },
    edad: {
        type: Number,
    },
    DNI: {
        type: Number,
    }
})