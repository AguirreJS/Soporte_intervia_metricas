import { Line } from 'react-chartjs-2';
import {  arraydConstructor } from './Filtro';




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


var Empresa = [];
var Tiempo = [];

var beneficios = Tiempo;
 var meses = Empresa;


export function name1() {
    


setTimeout(arrayd, 1000); }


function arrayd() {


    
    for (let i = 0; i < arraydConstructor.length; i++) {   

        Empresa.push(arraydConstructor[i][0].empresa)
    

        if (arraydConstructor[i][0].mensaje == "No se encontraron datos") {  Tiempo.push("0"); } else {

let objetos = arraydConstructor[i];
  // Inicializa una variable para la suma de tiempos en minutos
let sumaTiemposMinutos = 0;

// Itera a través de la lista de objetos y suma los tiempos en minutos
objetos.forEach(objeto => {
    const tiempoParts = objeto.tiempo.split(':');
    const horas = parseInt(tiempoParts[0]);
    const minutos = parseInt(tiempoParts[1]);
    const tiempoEnMinutos = horas * 60 + minutos;
    sumaTiemposMinutos += tiempoEnMinutos;
});

// Convierte la suma de minutos a horas y minutos
const horasSuma = Math.floor(sumaTiemposMinutos / 60);
const minutosSuma = sumaTiemposMinutos % 60;

let tiempototal = horasSuma +  "." + minutosSuma;
var numero = parseFloat(tiempototal);
Tiempo.push(numero);
    }}


    
    }








var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Tiempo',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Otra línea',
            data: [0]
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

export default function LinesChart() {
    
    return <Line data={midata} options={misoptions}/>
}