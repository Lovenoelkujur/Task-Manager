const express = require("express");
const authMiddlewareContainer = require("../middlewares/authMiddleware");
const userContainer = require("../controllers/userController");

const router = express.Router();

//------ User Management Routes ------------

// Get all users (Admin Only)
router.get("/", authMiddlewareContainer.protect, authMiddlewareContainer.adminOnly, userContainer.getUsers);

// Get a specific user
router.get("/:id", authMiddlewareContainer.protect, userContainer.getUserById);

module.exports = router;