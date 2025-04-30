const express = require("express");
const authMiddlewareContainer = require("../middlewares/authMiddleware");
const reportContainer = require("../controllers/reportController");

const router = express.Router();

// Export all Tasks as Excel/PDF
router.get("/export/tasks", authMiddlewareContainer.protect, authMiddlewareContainer.adminOnly, reportContainer.exportTasksReport);

// Export user-task report
router.get("/export/users", authMiddlewareContainer.protect, authMiddlewareContainer.adminOnly, reportContainer.exportUsersReport);

module.exports = router;