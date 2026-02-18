import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
      return res.status(400).json({message:"All fields required"});
    }

    if(password.length < 6){
      return res.status(400).json({message:"Password must be 6+ chars"});
    }

    const userExist = await User.findOne({email});
    if(userExist){
      return res.status(400).json({message:"User already exists"});
    }

    const hashed = await bcrypt.hash(password,10);

    const user = new User({name,email,password:hashed});
    await user.save();

    res.json({message:"User registered successfully"});
  } catch {
    res.status(500).json({message:"Server error"});
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message:"Invalid email"});
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match){
      return res.status(400).json({message:"Invalid password"});
    }

    const token = jwt.sign(
      { id:user._id },
      process.env.JWT_SECRET as string,
      { expiresIn:"1d" }
    );

    res.json({token});
  } catch {
    res.status(500).json({message:"Server error"});
  }
};
