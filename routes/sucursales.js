const express = require("express");
const router = express.Router();

//requiero el controller de sucursales
const sucursalesController = require("../controller/sucursalesController")

router.get("/", sucursalesController.listarSucursales )
router.get("/:id", sucursalesController.sucursal)



module.exports = router;