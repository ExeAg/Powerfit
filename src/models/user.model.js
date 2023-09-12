import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
export default mongoose.model('User', userSchema)