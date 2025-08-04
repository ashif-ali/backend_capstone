import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
connectDB();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


// app.use("/", (req, res) => {
//     res.send("Hello World from Express!");
// })

app.use(express.json());

import authRoutes from "./routes/auth.routes.js";
app.use("/api/auth", authRoutes);

import memoryRoutes from "./routes/memory.routes.js";
app.use("/api/memories", memoryRoutes);



app.listen(3001, () => {
    console.log("Server Running on http://localhost:3001");
})


