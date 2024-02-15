const express = require("express");
const router = express.Router();

const { registerNewUser, loginUser } = require("../controllers/auth.js");
const {getUserPages} = require("../controllers/userFacebookPage.js");

router.post("/api/signup", registerNewUser);
router.post("/api/login", loginUser);
router.get("/api/connect", getUserPages);

module.exports = router;