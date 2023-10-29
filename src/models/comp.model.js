import mongoose from "mongoose";

const compSchema = new mongoose.Schema({
    altura: {
        type: Number,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    grasa: {
        type: Number,
        required: true,
    },
    agua: {
        type: Number,
        required: true,
    },
    viceral: {
        type: Number,
        required: true,
    },
    musculo: {
        type: Number,
        required: true,
    },
    proteinas: {
        type: Number,
        required: true,
    },
    basal: {
        type: Number,
        required: true,
    },
    hueso: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true

});

export default mongoose.model("Comp", compSchema);