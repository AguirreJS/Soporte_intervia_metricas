import { arraydConstructor } from './Filtro';



export default function Claves(Listaempresa) {

    var resumenEmpresas = [];
    
 for (let i = 0; i <  arraydConstructor.length; i++) {



    arraydConstructor[i].forEach(ticket => {
        if (!ticket.empresa) {
            console.warn("Ticket sin propiedad 'empresa':", ticket);
            return;  // saltamos a la siguiente iteración
        }
        const empresa = ticket.empresa.toLowerCase();
    
        // Buscamos si ya existe la empresa en el array resumenEmpresas
        const empresaExistente = resumenEmpresas.find(e => e.empresa === empresa);
    
        // Si el ticket tiene palabras claves, las procesamos
        if (ticket.clave && ticket.clave.trim() !== '') {
            const claves = ticket.clave.toLowerCase().split(',');
    
            if (empresaExistente) {
                // Si la empresa ya existe, agregamos las claves al array existente
                empresaExistente.claves.push(...claves);
            } else {
                // Si no existe, añadimos una nueva entrada para la empresa con sus claves
                resumenEmpresas.push({
                    empresa: empresa,
                    claves: claves
                });
            }
        } else {
            // Si el ticket no tiene palabras claves y la empresa no está en el resumen, la agregamos con un array vacío
            if (!empresaExistente) {
                resumenEmpresas.push({
                    empresa: empresa,
                    claves: []
                });
            }
        }
    });
    
 }

let data = resumenEmpresas;

let result = {};

data.forEach(empresaData => {
    let empresa = empresaData["empresa"];
    let claves = empresaData["claves"];
    
    // Si no hay claves, agregar "Sin Palabras Clave"
    if (claves.length === 0) {
        result[empresa] = ["Sin Palabras Clave"];
        return;  // Salta al siguiente elemento del forEach
    }
    
    // Contar la frecuencia de cada clave
    let claveCount = {};
    claves.forEach(clave => {
        if (claveCount[clave]) {
            claveCount[clave]++;
        } else {
            claveCount[clave] = 1;
        }
    });

    // Ordenar claves por frecuencia y seleccionar las 3 más repetidas
    let sortedClaves = Object.keys(claveCount)
                              .sort((a, b) => claveCount[b] - claveCount[a])
                              .slice(0, 3)
                              .map(clave => `${clave} (${claveCount[clave]})`);  // Formatear el resultado
    
    result[empresa] = sortedClaves;
});





const empresas = result;

const listaOrdenada = Listaempresa;

const empresasOrdenadas = {};



listaOrdenada.forEach(empresaLista => {
    const key = Object.keys(empresas).find(key => key.toLowerCase() === empresaLista.toLowerCase());
    if (key) {
        empresasOrdenadas[empresaLista] = empresas[key];
    }
});


const arrayEmpresas = Object.keys(empresasOrdenadas).map(empresa => {
    return {
        nombre: empresa,
        palabrasClave: empresasOrdenadas[empresa]
    };
});


return arrayEmpresas




}