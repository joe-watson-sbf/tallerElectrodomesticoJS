const Electrodomestico = require('./Electrodomestico.js')

class Televisor extends Electrodomestico {

    constructor(consumo, procedencia, pulgadas, tdt){
        super(consumo, procedencia);
        this.pulgadas = pulgadas;
        this.tdt = tdt;
    }

    obtenerPrecio(){
        let total = super.precioBase();
        if(this.pulgadas > 40) total += (super.precioBase() * 30)/100;
        if(this.tdt) total += 250000;
        return total;
    }
}

module.exports = Televisor