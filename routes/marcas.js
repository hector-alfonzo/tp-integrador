const express = require("express");
const router = express.Router();

//requiero el archivo controller de marcas
const marcasController = require("../controller/marcasController")
router.get("/", marcasController.listarMarcas)
router.get("/:id", marcasController.detalleMarca)

module.exports = router;