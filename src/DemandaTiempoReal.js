import { Line } from 'react-chartjs-2';
import { metricas } from './FiltroTK';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var Fecha = [];
var TicketsPorFecha = [];
var ValorAguardando = [];
var ValorEnProceso = [];
var sumaResultados = [];
var ArraydFucionado = [];






export default function Demanda(ojbetoContructor) {



    unirArrays(ojbetoContructor)

    function unirArrays(arrays) {

       
      
        if (arrays.length == undefined) {
          
            return [];
        }

     let Unido = arrays.reduce((acumulador, arrayActual) => acumulador.concat(arrayActual), []);
   
      SepararPorFecha(Unido)

    }
    

    





function SepararPorFecha(Unido) {

    const fechaCount = {};

Unido.forEach(item => {
    if (item.Fecha) {
        const fecha = item.Fecha;
        fechaCount[fecha] = (fechaCount[fecha] || 0) + 1;
    }
});

 Fecha = Object.keys(fechaCount);

 TicketsPorFecha = Object.values(fechaCount);

 for (let i = 0; i < Fecha.length; i++) {

ArraydFucionado[i] = [Fecha[i],TicketsPorFecha[i]]

  }


function compararFechas(a, b) {
    const fechaA = new Date(a[0]);
    const fechaB = new Date(b[0]);

    if (fechaA < fechaB) {
        return -1;
    } else if (fechaA > fechaB) {
        return 1;
    } else {
        return 0;
    }
}

// Ordenar el array por fecha
ReordenarPorFecha (ArraydFucionado.sort(compararFechas))

// Ordenar el array por fecha
function ReordenarPorFecha (Parametro) {

    for (let i = 0; i < Parametro.length; i++) { 
        Fecha[i] = Parametro[i][0] ;
     
     TicketsPorFecha[i] =  Parametro[i][1];
     
     
     }



}




}

///////////////////////////////////////////////////////////////////////////////


    


var beneficios = TicketsPorFecha;
var meses = Fecha;
MetricasEstadoActualDeTickets(Fecha)

function MetricasEstadoActualDeTickets(Fecha) {

    var fechasOrdenadas = Fecha.map(fecha => {
        const [año, mes, dia] = fecha.split('-');
        return `${dia}-${mes}-${año}`;
    });
    


const resultado = fechasOrdenadas.map(fecha => {
    const dato = metricas.find(d => d.fecha === fecha);
    return dato ? dato.Aguardando : 0;
});

const resultado2 = fechasOrdenadas.map(fecha => {
    const dato = metricas.find(d => d.fecha === fecha);
    return dato ? dato.EnProceso : 0;
});

const resultado3 = fechasOrdenadas.map(fecha => {
    const dato = metricas.find(d => d.fecha === fecha);
    return dato ? dato.EnProceso: 0;
});





ValorAguardando = resultado; // Este será tu array final
ValorEnProceso =  resultado2; // Este será tu array final



for (let i = 0; i < ValorAguardando.length; i++) {
    sumaResultados[i] = ValorAguardando[i] + ValorEnProceso[i];
}



    
 


}


var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Tickets iniciados',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: '#551d9e',
        },

        {
            label: 'Aguardando',
            data: ValorAguardando,
            borderColor: 'rgb(54, 162, 235)', // Azul
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul con transparencia
            pointBackgroundColor: '#551d9e',
        },
        {
            label: 'En Proceso',
            data: ValorEnProceso,
            borderColor: 'rgb(75, 192, 92)', // Verde
            backgroundColor: 'rgba(75, 192, 92, 0.5)', // Verde con transparencia
            pointBackgroundColor: '#34a853', // Otro tono de verde
        },
        {
            label: 'Suma de Pendientes',
            data: sumaResultados,
            borderColor: 'rgb(0, 0, 0)', // Negro
            backgroundColor: 'rgba(128, 128, 128, 0.5)', // Gris con transparencia
            pointBackgroundColor: '#333333', // Gris oscuro
        },        
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};


    return <div>
    <h1 className='TituloGrafica'>Demanda Por Fecha</h1>
    <Line data={midata} options={misoptions}/>
  </div>
  
}