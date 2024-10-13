const express = require("express");
const router  = express.Router();
const registerUser = require("../Controllers/registerUser")

router.route("/sign-up").post(registerUser);
router.route("/sign-in").post(registerUser);

module.exports = router;
