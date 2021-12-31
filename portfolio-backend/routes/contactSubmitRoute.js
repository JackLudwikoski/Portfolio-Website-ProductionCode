const express = require("express");
const router = express.Router();

contactSubmitRoute = require("../controllers/contactSubmitController");

router.post("/", contactSubmitRoute.contactSubmitController);

module.exports = router;