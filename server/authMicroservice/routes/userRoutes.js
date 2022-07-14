const express = require("express");
const router = express.Router();

const { signup, signin, updateUser } = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", signin);
router.post("/update", updateUser);

module.exports = router;
