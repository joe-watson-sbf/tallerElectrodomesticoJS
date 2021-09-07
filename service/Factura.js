const dao = require('../dao/fakeData')

// Generar Fake Datas
const datos = dao.generate();


// Filtros
const getTelevisores = datos.filter(obj => obj.tdt !== undefined)
    .map(data => {
        outpout = {
            'Consumo' : data.consumo,
            'Procedencia': data.procedencia,
            'Pulgadas': data.pulgadas,
            'TDT': data.tdt==true ? 'Sí':'No',
            'Precio': data.obtenerPrecio()
        }
        return outpout;
    }
);

const getNeveras =  datos.filter(data => data.capacidad !== undefined)
    .map(data => {
        outpout = {
            'Consumo' : data.consumo,
            'Procedencia': data.procedencia,
            'Capacidad': data.capacidad,
            'Precio': data.obtenerPrecio()
        }
        return outpout;
    }
);

const getElectrodomesticosGeneral = datos.filter(data => 
    (data.tdt === undefined && data.capacidad === undefined))
    .map(data => {
        outpout = {
            'Consumo' : data.consumo,
            'Procedencia': data.procedencia,
            'Precio': data.precioBase()
        }
        return outpout;
    }
);

const consumoFilter=(lista)=>{
    console.log("Cantidad Consumo Por Tipo:")
    console.log("\tTipo A: ", 
    lista.filter(data=> data.Consumo.toLowerCase().trim()==='a').length);

    console.log("\tTipo B: ", 
    lista.filter(data=> data.Consumo.toLowerCase().trim()==='b').length);

    console.log("\tTipo C: ", 
    lista.filter(data=> data.Consumo.toLowerCase().trim()==='c').length);

}

function precioConsumo(lista){
    let suma=0;
    lista.forEach(element => {
        suma += element.Precio;
    });
    return suma;
}
imprimir = (lista)=>{
    
    console.log("Cantidad: ", lista.length)
    consumoFilter(lista);
    console.log("Monto Consumo Por Tipo:")
    console.log("\tTipo A: $", precioConsumo(lista.filter(e=> e.Consumo==='a')));
    console.log("\tTipo B: $", precioConsumo(lista.filter(e=> e.Consumo==='b')));
    console.log("\tTipo C: $", precioConsumo(lista.filter(e=> e.Consumo==='c')));
    console.log("Monto Total: $", precioConsumo(lista));
}

const reporte = ()=> {
    console.log("\n===== REPORTE GENERAL =====\n")
    console.log("\n ___________ELECTRODOMESTICO GENERAL___________")
    imprimir(getElectrodomesticosGeneral);
    console.log("\n ___________NEVERA___________")
    imprimir(getNeveras);
    console.log("\n ___________TELEVISOR___________")
    imprimir(getTelevisores);
}



module.exports = reporte