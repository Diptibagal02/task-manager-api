import { Response } from "express";
import Task from "../models/Task";

export const createTask = async (req:any, res:Response)=>{
  try{
    const { title, description } = req.body;

    if(!title){
      return res.status(400).json({message:"Title required"});
    }

    const task = new Task({
      title,
      description,
      userId:req.user.id
    });

    await task.save();
    res.json(task);

  }catch{
    res.status(500).json({message:"Error creating task"});
  }
};

export const getTasks = async (req:any, res:Response)=>{
  const tasks = await Task.find({userId:req.user.id});
  res.json(tasks);
};

export const getSingleTask = async (req:any, res:Response)=>{
  const task = await Task.findOne({
    _id:req.params.id,
    userId:req.user.id
  });

  if(!task){
    return res.status(404).json({message:"Task not found"});
  }

  res.json(task);
};

export const updateTask = async (req:any, res:Response)=>{
  const task = await Task.findOneAndUpdate(
    { _id:req.params.id, userId:req.user.id },
    req.body,
    { new:true }
  );

  res.json(task);
};

export const deleteTask = async (req:any, res:Response)=>{
  await Task.findOneAndDelete({
    _id:req.params.id,
    userId:req.user.id
  });

  res.json({message:"Task deleted"});
};
