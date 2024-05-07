const express = require("express");

const {
    getAll,
    getId,
    login,
    newUser,
    editUser,
    deleteUser,
} = require("../controllers/UserController");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getId);
router.post("/", newUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.post("/login", login);

module.exports = router;
