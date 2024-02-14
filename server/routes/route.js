const express = require("express");
const router = express.Router();

const { registerNewUser, loginUser } = require("../controllers/auth.js");

router.post("/signup", registerNewUser);
router.post("/login", loginUser);

module.exports = router;