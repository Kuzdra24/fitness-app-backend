const express = require("express");
const router = express.Router();
const homepage = require("../controllers/homepage");
const about = require("../controllers/about");

router.get("/", homepage);
router.get("/about", about);

module.exports = router;
