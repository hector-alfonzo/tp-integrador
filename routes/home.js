const express = require("express");
const router = express.Router();

// requiero el controller del home
const homeController = require("../controller/homeController")

//--------
router.get("/", homeController.index)


module.exports = router;