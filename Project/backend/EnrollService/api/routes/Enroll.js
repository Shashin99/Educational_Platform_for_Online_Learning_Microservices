const express = require("express");

const {
    getAll,
    getId,
    newEnroll,
    editEnroll,
    deleteEnroll,
} = require("../controllers/EnrollController");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getId);
router.post("/", newEnroll);
router.put("/:id", editEnroll);
router.delete("/:id", deleteEnroll);

module.exports = router;
