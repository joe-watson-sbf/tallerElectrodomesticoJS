const Electrodomestico = require('./Electrodomestico.js')

class Televisor extends Electrodomestico {

    constructor(consumo, procedencia, pulgadas, tdt){
        super(consumo, procedencia);
        this.pulgadas = pulgadas;
        this.tdt = tdt;
    }

    obtenerPrecio(){
        let total = super.precioBase();
        console.log("Total 0 : ", total);
        if(this.pulgadas > 40) total += (super.precioBase() * 30)/100;
        console.log("Total 1 : ", total);
        if(this.tdt) total += 250000;
        console.log("Total 2 : ", total);
        return total;
    }
}

module.exports = Televisor