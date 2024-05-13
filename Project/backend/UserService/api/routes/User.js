const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
    getAll,
    getId,
    login,
    newUser,
    editUser,
    deleteUser,
    otp,
} = require("../controllers/UserController");

const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getId);
router.post("/", newUser);
router.put("/:id", verifyToken, editUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/login", login);
router.post("/otp", otp);

module.exports = router;