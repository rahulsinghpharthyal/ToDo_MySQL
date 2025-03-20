import db from "../database/dbConnection.js";
import ErrorHandler from "../middleware/errorHandler.js";
import catchAsyncError from "../utils/catchAsyncError.js";

// Create a new To-Do
export const createTodoController = catchAsyncError(async (req, res, next) => {
  const { title, description, status } = req.body;
  if (!title || !description)
    return next(new ErrorHandler("Title and Description are required!", 400));
  const [result] = await db.query(
    "INSERT INTO todos (title, description, status) VALUES (?, ?, ?)",
    [title, description, status || "pending"]
  );
  return res
    .status(201)
    .json({
      message: "Task Created Succesfully",
      data: { id: result.insertId, title, description, status },
    });
});

// Get all To-Dos
export const getTodosController = catchAsyncError(async (req, res, next) => {
    const [todos] = await db.query("SELECT * FROM todos");
    console.log("this is all todos", todos);
    if (!todos || todos.length === 0) {
      return next(new ErrorHandler("No Task Found", 400));
  }
    return res.status(200).json({message: 'All Task', task: todos});
});


//   Update To-Do
export const updateTodoById = catchAsyncError(async (req, res, next) => {
    const { title, description, status } = req.body;
    const { id } = req.params;
    console.log('the id is', id)
    if (!id)
      return next(new ErrorHandler("ID is required", 400));

    const [existingTask] = await db.query(
      "SELECT * FROM todos WHERE id = ? ", [id]
    )
    if (existingTask.length === 0)
      return next(new ErrorHandler("Task is not Found", 400));
    const updateQuery = `UPDATE todos SET 
      ${title ? "title = ?" : ""} 
      ${title && description ? "," : ""}
      ${description ? "description = ?" : ""} 
      ${((title || description) && status) ? "," : ""}
      ${status ? "status = ?" : ""} 
    WHERE id = ?`;

  const values = [
    ...(title ? [title] : []),
    ...(description ? [description] : []),
    ...(status ? [status] : []),
    id
  ];

  // Execute the query with the values
  await db.query(updateQuery, values);
    return res.json({ message: "Todo updated successfully" });
});


// Delete To-Do
export const deleteTodoById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("ID is Required", 400));
  // check the given id task was found or not:-
  const [existingTask] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
  if (existingTask.length === 0)
    return next(new ErrorHandler("Task is not Found", 400));
  const deleteTask = await db.query("DELETE FROM todos WHERE id = ? ", [id]);
  return res.status(200).json({ message: "Todo deleted successfully" });
});
