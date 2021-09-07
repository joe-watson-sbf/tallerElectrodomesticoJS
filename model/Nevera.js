const Electrodomestico = require('./Electrodomestico.js')

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, capacidad){
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    obtenerPrecio(){
        let total = super.precioBase()
        console.log("Total 0 : ", total);
        let contador = 0;
        console.log("Contador 0 : ", contador);
        if(this.capacidad > 120) contador = Math.floor((this.capacidad-120)/10);
        console.log("Contador 1 : ", contador);
        total += contador * ((super.precioBase() * 5)/100);
        return total;
    }
}

module.exports = Nevera;