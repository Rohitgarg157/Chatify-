import  express from "express";
import dotenv from "dotenv"; 
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app,server } from "./socket/socket.js";

const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  //to parse the incoming request with json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(PORT,()=>{
   connectToMongoDB();
console.log(`server Running on port ${PORT}`)
}); 