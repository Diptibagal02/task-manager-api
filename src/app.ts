import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI as string)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
  res.send("API running");
});

app.use((err:any, req:any, res:any, next:any)=>{
  console.error(err);
  res.status(500).json({message:"Server error"});
});

app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
