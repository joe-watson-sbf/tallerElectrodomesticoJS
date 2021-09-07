const {getElectrodomesticosGeneral, getNeveras, getTelevisores, reporte} = require('./service/Factura');

console.log('\n____________Lista Electrodomesticos____________')
console.log(getElectrodomesticosGeneral)

console.log('\n____________Lista Nevera____________')
console.log(getNeveras)

console.log('\n____________Lista Televisor____________')
console.log(getTelevisores)
console.log("\n____________________________________\n")
console.log(reporte())