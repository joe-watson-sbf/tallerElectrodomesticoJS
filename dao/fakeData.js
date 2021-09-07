const Nevera = require('../model/Nevera')
const Televisor = require('../model/Televisor')
const Electrodomestico = require('../model/Electrodomestico')

class FakeDataElectro{

    constructor(){
        this.lista = [];
    }

    generate(){
        this.#generateGeneral();
        this.#generateNeveras();
        this.#generateTVs()
        return this.lista
    }
    
    #generateGeneral(){
        for (let i = 0; i < 5; i++) {
            if(i<5) this.lista.push(new Electrodomestico('b', 'nacional'))
            this.lista.push(new Electrodomestico('a', 'importado'))
        }
    }

    #generateNeveras(){
        for (let i = 0; i < 12; i++) {
            if(i<10) this.lista.push(new Nevera('a', 'nacional', 0))
            this.lista.push(new Nevera('c', 'importado', 0))
        }
    }

    #generateTVs(){
        for (let i = 0; i < 13; i++) {
            if(i<3) this.lista.push(new Televisor('a', 'nacional', 0, false))
            if(i<7) this.lista.push(new Televisor('c', 'nacional', 0, false))
            this.lista.push(new Televisor('b', 'importado', 0, false))
        }
    }

}

const dao = new FakeDataElectro();

module.exports = dao