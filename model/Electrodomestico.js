class Electrodomestico {

    constructor(consumo, procedencia) {
        this.consumo = consumo;
        this.procedencia = procedencia;
    }

    precioConsumo(){
        let consumo = this.consumo.toLowerCase().trim();
        switch (consumo) {
        case 'a':
            return 450000;
        case 'b':
            return 350000;
        case 'c':
            return 250000;
        default:
            return 0;
        }
    }

    precioProcedencia() {
        let procedencia = this.procedencia.toLowerCase().trim();
        switch (procedencia) {
            case 'nacional':
                return 250000;
            case 'importado':
                return 350000;
            default:
                return 0;
        }
    }

    precioBase() {
        return this.precioConsumo() + this.precioProcedencia();
    }
}

module.exports = Electrodomestico