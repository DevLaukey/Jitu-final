const { signup, signin } = require("../controllers/userController");
const express = require('express');
const router = express.Router();

router.post('/signup', signup)
router.post('/login', signin)

module.exports = router;
