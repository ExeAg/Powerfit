import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/DbPowerFit");
        console.log("Se conectó perro")
    } catch (error) {
       console.log(error); 
    }
    
}