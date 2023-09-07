import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb:localhost/DbPowerFit")
    } catch (error) {
       console.log(error); 
    }
    
}