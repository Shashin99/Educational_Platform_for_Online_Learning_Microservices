const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
    getAll,
    getId,
    newEnroll,
    editEnroll,
    deleteEnroll,
} = require("../controllers/EnrollController");

const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getId);
router.post("/", verifyToken, newEnroll);
router.put("/:id", verifyToken, editEnroll);
router.delete("/:id", verifyToken, deleteEnroll);

module.exports = router;
