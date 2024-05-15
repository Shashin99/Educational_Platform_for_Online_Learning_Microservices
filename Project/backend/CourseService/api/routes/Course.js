const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
    getAll,
    getId,
    newCourse,
    editCourse,
    deleteCourse,
    uploadFile,
} = require("../controllers/CourseController");

const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getId);
router.post("/", verifyToken, newCourse);
router.post("/upload", verifyToken, uploadFile);
router.put("/:id", verifyToken, editCourse);
router.delete("/:id", verifyToken, deleteCourse);

module.exports = router;
