const fs = require("fs")
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const homeController = {
    index : (req,res) =>{
        res.set({'content-type':"text/plain;charset=uft-8"})
        res.write ("Bienvenido a nuestra pagina de inicio, somos Concesionarias Formar" )
        res.write("\n\n")
        res.write ("A continuacion te listaremos nuestra sucursales" )
        res.write("\n\n")
        concesionarias.forEach(concesionaria => {
        res.write("Sucursal: " + concesionaria.sucursal)
        res.write("\n\n")
        res.write("----------------------")
        res.write("\n\n")
    })
    res.end()
    }

}

module.exports = homeController;