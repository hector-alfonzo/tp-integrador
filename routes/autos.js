const express = require("express");
const router = express.Router();

//requiro en archivo controller de autos
const autosController = require("../controller/autosController")

router.get("/",autosController.listaAutos)

module.exports = router;