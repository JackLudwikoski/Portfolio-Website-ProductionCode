const express = require("express");
const router = express.Router();

passwordRoute = require("../controllers/passwordController");

router.get("/", passwordRoute.passwordController);

module.exports = router;