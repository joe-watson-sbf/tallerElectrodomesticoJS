const dao = require('./dao/fakeData');
const { getElectrodomesticosGeneral, getNeveras , getTelevisores } = require('./service/Factura');
const lista = dao.generate();

console.log(getNeveras(lista))
console.log("\n\n")
console.log(getElectrodomesticosGeneral(lista))
console.log("\n\n")
console.log(getTelevisores(lista))
/*
const listTvs = lista.filter(data => data.tdt !== undefined);
listTvs.forEach(element => {
  console.log(element.obtenerPrecio())
});
console.log("Vs: ", listTvs[0].obtenerPrecio())
*/