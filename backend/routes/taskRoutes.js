const express = require("express");
const authMiddlewareContainer = require("../middlewares/authMiddleware");
const taskContainer = require("../controllers/taskController");

const router = express.Router();

//----------- Task Management Routes -----------

// Dashboard Data
router.get("/dashboard-data", authMiddlewareContainer.protect, taskContainer.getDashboardData);

// User Dashboard Data
router.get("/user-dashboard-data", authMiddlewareContainer.protect, taskContainer.getUserDashboardData);

// Get all task (Admin : all, User : assigned)
router.get("/", authMiddlewareContainer.protect, taskContainer.getTasks);

// Get task by ID
router.get("/:id", authMiddlewareContainer.protect, taskContainer.getTaskById);

// Create a task (Admin Only)
router.post("/", authMiddlewareContainer.protect, authMiddlewareContainer.adminOnly, taskContainer.createTask);

// Update task details
router.put("/:id", authMiddlewareContainer.protect, taskContainer.updateTask);

// Delete a task (Admin Only)
router.delete("/:id", authMiddlewareContainer.protect, authMiddlewareContainer.adminOnly, taskContainer.deleteTask);

//Update task Status
router.put("/:id/status", authMiddlewareContainer.protect, taskContainer.updateTaskStatus);

// Update task checklist
router.put("/:id/todo", authMiddlewareContainer.protect, taskContainer.updateTaskChecklist);

module.exports = router;