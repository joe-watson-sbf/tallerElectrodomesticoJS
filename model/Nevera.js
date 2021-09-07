const Electrodomestico = require('./Electrodomestico.js')

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, capacidad){
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    obtenerPrecio(){
        let total = super.precioBase()
        let contador = 0;
        if(this.capacidad > 120) contador = Math.floor((this.capacidad-120)/10);
        total += contador * ((super.precioBase() * 5)/100);
        return total;
    }
}

module.exports = Nevera;