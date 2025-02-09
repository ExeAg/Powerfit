//-------En esta carpeta se van a guardar los modelos de datos de nuestra base de datos

import mongoose from "mongoose";


const compositionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  grasa: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
},
  { timestamps: true }
);

export default mongoose.model('Composition', compositionSchema);