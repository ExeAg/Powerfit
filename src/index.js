import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(3000);
console.log("Server en puerto", 3000);


//react-qr-reader   qrcode