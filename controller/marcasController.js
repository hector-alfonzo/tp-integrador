const fs = require("fs");
const e = require("express");
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const marcasController = {
    listarMarcas: (req,res) =>{
        let listaMarcas = [];
        concesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                listaMarcas.push(auto.marca)
            })
        })
        // esta funcion se encarga de eleminar elementos repetidos del array
        res.write("Bienvenido a nuestra pagina de marcas, a continuacion te mostramos una lista de las marcas con las que trabajamos actualmente")
        res.write("\n")
        res.write("\n")
        res.write("---------------------------------------------")
        res.write("\n")
        let listaFiltrada = listaMarcas.filter((el, index) => listaMarcas.indexOf(el) === index)
        listaFiltrada.forEach( (elemento) => {
            res.write(elemento + "\n")
            res.write("-----------------------------------------------")
            res.write("\n")
        })
        res.end()
    },
    detalleMarca : (req , res) =>{
        res.set({'content-type':"text/plain;charset=uft-8"})
        let idMarca = req.params.id
        res.write("Bienvenido a continuacion te mostramos una lista de autos disponibles de la marca " + idMarca)
        res.write("\n")
        res.write("\n")
        res.write("---------------------------------------------")
        res.write("\n")
        let buscarAutosMarca = (marca)=>{
            concesionarias.forEach((concesionaria)=>{
                concesionaria.autos.forEach((auto)=>{
                    if (auto.marca == marca){
                        res.write ("Marca :" + auto.marca + "   Modelo: " + auto.modelo + "   Anio: " + auto.anio)
                        res.write("\n")
                        res.write("----------------------------------")
                        res.write("\n")
                    }
        })})
    }

            res.send(buscarAutosMarca(idMarca))
        }
    }

module.exports = marcasController;