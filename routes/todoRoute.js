import express from "express";
import {
  createTodoController,
  deleteTodoById,
  getTodosController,
  getTodoWithPagination,
  updateTodoById
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/create-todo", createTodoController);
router.get("/all-todos", getTodosController);
router.put("/update-todo/:id", updateTodoById);
router.delete("/delete-todo/:id", deleteTodoById);
router.get("/get-todos-pagination", getTodoWithPagination);

export default router;
