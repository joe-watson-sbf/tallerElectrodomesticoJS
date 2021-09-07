const Nevera = require('../model/Nevera')
const Televisor = require('../model/Televisor')
const ElectrodomesticoGeneral = require('../model/Electrodomestico')


// Filtros
const getTelevisores = (datos)=> datos.filter(data => data.tdt !== undefined);
const getNeveras = (datos)=> datos.filter(data => data.capacidad !== undefined)
const getElectrodomesticosGeneral = (datos) => 
    datos.filter(data => 
        (data.tdt === undefined && data.capacidad === undefined));




module.exports = {
    getElectrodomesticosGeneral, getNeveras , getTelevisores
}