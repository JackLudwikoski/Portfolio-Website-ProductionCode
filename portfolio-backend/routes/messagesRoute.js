const express = require("express");
const router = express.Router();

messagesRoute = require("../controllers/messagesController");

router.get("/", messagesRoute.messagesController);

module.exports = router;