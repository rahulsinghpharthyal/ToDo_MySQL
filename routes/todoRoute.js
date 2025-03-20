import express from "express";
import {
  createTodoController,
  deleteTodoById,
  getTodosController,
  updateTodoById
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/create-todo", createTodoController);
router.get("/all-todos", getTodosController);
router.put("/update-todo/:id", updateTodoById);
router.delete("/delete-todo/:id", deleteTodoById);
// router.get("/:id", getTodoByIdController);

export default router;
