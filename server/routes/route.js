const express = require("express");
const router = express.Router();

const { registerNewUser, loginUser } = require("../controllers/auth.js");

router.post("/api/signup", registerNewUser);
router.post("/api/login", loginUser);

module.exports = router;