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

var Fechas = [];
var Valores = [];
const result = [];
var tickets = [];


export default function ContadorTK(Parametro) {



 
tickets = Parametro;

if (tickets.length > 0) {

// Ordenar por fecha
tickets.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

// Contar los tickets y guardar en nuevo array sin fechas repetidas
let count = 0;

tickets.forEach(ticket => {
    count++;
    // Revisamos si ya hemos procesado esta fecha
    const existingEntry = result.find(entry => entry.fecha === ticket.fecha);
    if (existingEntry) {
        // Si la fecha ya existe, simplemente actualizamos el conteo
        existingEntry.totalTicketsHastaFecha = count;
    } else {
        // Si no existe, agregamos una nueva entrada
        result.push({
            fecha: ticket.fecha,
            totalTicketsHastaFecha: count
        });
    }
});}


 Fechas = result.map(entry => entry.fecha);
 Valores = result.map(entry => entry.totalTicketsHastaFecha);


    



    
    

 var midata = {
    labels: Fechas,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Tickets',
            data: Valores,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(54, 162, 235)', // Azul
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul semi-transparente
            pointRadius: 5,
            pointBorderColor: 'rgb(54, 162, 235)', // Azul
            pointBackgroundColor: 'rgb(23, 125, 255)', // Azul más oscuro
        },
    ],
};

var misoptions = {
    scales: {
        y: {
            min: 0
        },
        x: {
            ticks: { color: 'rgb(54, 162, 235)' } // Azul
        }
    }
};

return <div>
    <h1 className='TituloGrafica'>Crecimiento de Tickets</h1>
    <Line data={midata} options={misoptions}/>
</div>
}