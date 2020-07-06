const express = require("express");
const app = express();

// requieros los archivos de ruta------
const routeHome = require("./routes/home")
const routeSucursales = require("./routes/sucursales")
const routeMarcas = require("./routes/marcas")
const routeAutos= require("./routes/autos")

//------

//--------

app.listen(3030 , ()=> console.log("Levantando en puerto 3030"));

app.use("/", routeHome);
app.use("/sucursales", routeSucursales)
app.use("/autos",routeAutos);
app.use("/marcas",routeMarcas);