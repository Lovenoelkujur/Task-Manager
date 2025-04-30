const express = require("express");
const authContainer = require("../controllers/authController");
const authMiddlewareContainer = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

// Auth Routes
router.post("/register", authContainer.registerUser);                 // Register User
router.post("/login", authContainer.loginUser);                       // Login User
router.get("/profile", authMiddlewareContainer.protect, authContainer.getUserProfile);        // Get User Profile
router.put("/profile", authMiddlewareContainer.protect, authContainer.updateUserProfile);     // Update Profile

router.post("/upload-image", upload.single("image"), (req, res) => {
    if(!req.file){
        return res.status(400).json({
            success : false,
            message : "No file uploaded !",
        });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    res.status(200).json({
        imageUrl,
    });
});

module.exports = router;