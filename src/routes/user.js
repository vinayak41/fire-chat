const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  login,
  getAllUsers,
} = require("../controllers/user");

router.get("/:id", getUser);
router.get("/", getAllUsers);
router.post("/login", login);
router.post("/register", createUser);

module.exports = router;
