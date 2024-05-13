const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
    getAll,
    getId,
    newLearner,
    editLearner,
    deleteLearner,
} = require("../controllers/LearnerController");

const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getId);
router.post("/", verifyToken, newLearner);
router.put("/:id", verifyToken, editLearner);
router.delete("/:id", verifyToken, deleteLearner);

module.exports = router;
