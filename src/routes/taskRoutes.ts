import express from "express";
import {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask
} from "../controllers/taskController";

import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.get("/:id", authMiddleware, getSingleTask);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;
