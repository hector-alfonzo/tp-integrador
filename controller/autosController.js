const fs = require("fs")
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const autosController = {
    listaAutos : (req , res) => {
        res.set({'content-type':"text/plain;charset=uft-8"})

        res.write("A continuacion le mostraremos una lista de todos nuestros autos")
        res.write("\n")
        res.write("\n")
        res.write("-------------------------------------------------------")
        res.write("\n")
        concesionarias.forEach( (concesionaria) =>{
            concesionaria.autos.forEach((auto)=>{
                res.write("Marca: " + auto.marca)
                res.write("\n")
                res.write("Modelo: " + auto.modelo)
                res.write("\n")
                res.write("Anio: " + auto.anio)
                res.write("\n")
                res.write("Color: " + auto.color)
                res.write("\n")
                res.write("----------------------------------------------------")
                res.write("\n")
            })
        })
        res.end()
    },
}

module.exports = autosController;