import { Line } from 'react-chartjs-2';

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

var usuariosArr = [];
var ticketsArr = [];
var empresasArr = [];
var fechasArr = [];


export default function ContadorProgresivo(inicio , Fin , metricas) {



    function filtrarYExtraer(datos, fechaInicio, fechaFin) {
        if(metricas == undefined) { return  console.log("Cerrar Busqu3eda")}
        // Convertimos las fechas de inicio y fin a Date para compararlas
        let inicio = new Date(fechaInicio);
        let fin = new Date(fechaFin);
    
        // Filtramos el array por la fecha
        let filtrados = datos.filter(item => {
            let fechaItem = new Date(item.fecha.split('-').reverse().join('-')); // Convertimos la fecha del item a Date
            return fechaItem >= inicio && fechaItem <= fin;
        });
    
        // Extraemos los valores en nuevos arrays
         usuariosArr = filtrados.map(item => item.Usuarios);
         ticketsArr = filtrados.map(item => item.Tickets);
         empresasArr = filtrados.map(item => item.Empresas);
         fechasArr = filtrados.map(item => item.fecha);
    
     
    }
    


      
       filtrarYExtraer(metricas, inicio, Fin);
 
    
    



    
    

var midata = {
    labels: fechasArr,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Tickets',
            data: ticketsArr,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: '#551d9e',
        },

        {
            label: 'Empresas',
            data:empresasArr,
            borderColor: 'rgb(54, 162, 235)', // Azul
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul con transparencia
            pointBackgroundColor: '#551d9e',
        },
        {
            label: 'Usuarios',
            data: usuariosArr,
            borderColor: 'rgb(75, 192, 92)', // Verde
            backgroundColor: 'rgba(75, 192, 92, 0.5)', // Verde con transparencia
            pointBackgroundColor: '#34a853', // Otro tono de verde
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
    <h1 className='TituloGrafica'>Contador tickets Empresas y Usuarios nuevos</h1>
    <Line data={midata} options={misoptions}/>
  </div>
  
}