import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/powerfitdb"); //127.0.0.1:27017 es el localhost
    console.log(">>> BD conectada");
  } catch (error) {
    console.log(error);
  }
};
