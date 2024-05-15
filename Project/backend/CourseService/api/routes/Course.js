const express = require("express");

const {
    getAll,
    getId,
    newCourse,
    editCourse,
    deleteCourse,
} = require("../controllers/CourseController");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getId);
router.post("/", newCourse);
router.put("/:id", editCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
