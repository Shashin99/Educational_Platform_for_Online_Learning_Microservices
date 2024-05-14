const express = require("express");

const {
    getAll,
    getId,
    newLearner,
    editLearner,
    deleteLearner,
} = require("../controllers/LearnerController");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getId);
router.post("/", newLearner);
router.put("/:id", editLearner);
router.delete("/:id", deleteLearner);

module.exports = router;
