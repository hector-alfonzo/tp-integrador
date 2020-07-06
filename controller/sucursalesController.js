const fs = require("fs")
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursalesController = {
    listarSucursales: (req , res) =>{
        res.set({'content-type':"text/plain;charset=uft-8"})
        res.write("Bienvenido a nuestra pagina de Sucursales. A conticuacion podra ver una lista de nuestra sucursales y sus respectivos datos de contacto")
        res.write("\n")
        res.write("\n")
        res.write("----------------------------------------------------")
        res.write("\n")
        concesionarias.forEach(concesionaria => {
        res.write("Sucursal: " + concesionaria.sucursal)
        res.write("\n")
        res.write("Telefono: "+ concesionaria.telefono)
        res.write("\n")
        res.write("Direccion: "+ concesionaria.direccion)
        res.write("\n")
        res.write("-----------------------------------------------")
        res.write("\n")
        
    })
    res.end()
    },
    
    sucursal: (req,res) => {
        res.set({'content-type':"text/plain;charset=uft-8"})
         let  buscarSucursal = function(sucursal){
            concesionarias.forEach(concesionaria => {
                if (concesionaria.sucursal == sucursal){
                    res.write("Sucursal: " + concesionaria.sucursal)
                    res.write("\n\n")
                    res.write("Direccion: " + concesionaria.direccion)
                    res.write("\n\n")
                    res.write("Telefono: " + concesionaria.telefono)
                    res.write("\n\n")
                    res.write("Autos: \n")
                    concesionaria.autos.forEach((auto)=>{
                            res.write("Marca: " + auto.marca)
                            res.write("\n")
                            res.write("Modelo: " + auto.modelo)
                            res.write("\n")
                            res.write("Año: " + auto.anio)
                            res.write("\n")
                            res.write("Color: " + auto.color)
                            res.write("\n")
                            res.write("--------------------------------")
                            res.write("\n")
                    })
                }
                
            })
            }
        idSucursal = req.params.id
        switch (idSucursal){
            case ("pilar"):
                res.send(buscarSucursal("Pilar"))
                break;
            case ("quilmes"):
                res.send(buscarSucursal("Quilmes"))
                break;
            case ("lanus"):
                res.send(buscarSucursal("Lanus"))
                break;
            case ("3-de-febrero"):
                res.send(buscarSucursal("3 de Febrero"))
                break;
            case ("san-miguel"):
                res.send(buscarSucursal("San Miguel"))
                break;
            default:
                res.send("La sucursal solicitada no existe")
        }    
    }
     
}

module.exports = sucursalesController;