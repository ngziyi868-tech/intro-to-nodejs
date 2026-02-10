const express = require("express");
const { ttechFunction } = require("../controllers/ttech");
const router = express.Router();

router.get("/ttech", ttechFunction);

module.exports = router; 