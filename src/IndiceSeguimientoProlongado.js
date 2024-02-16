
import { Bar } from 'react-chartjs-2';
import { arraydConstructor } from './Filtro';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


 export var Empresa = []
 
 export var Empresa1 = []
export var Tiempo = []


export default function BarsChart() {

    var TitaldeHilos = []
    
    var TitaldeHilos1 = []
    var Tickets = []

    EjecutarReordenamiento()
function EjecutarReordenamiento() {

    for (let i = 0; i < arraydConstructor.length; i++) { 

Empresa[i] = arraydConstructor[i][0].empresa;
Tickets[i] =  arraydConstructor[i].length
var suma1 = 0;
for (let c = 0; c < arraydConstructor[i].length; c++) { 
      
         suma1 = suma1 + parseFloat(arraydConstructor[i][c].hilos);  

}
TitaldeHilos[i] = suma1;

    }

    for (let i = 0; i < TitaldeHilos.length; i++) {
        if (TitaldeHilos[i] === null || isNaN(TitaldeHilos[i])) {
            TitaldeHilos[i] = 0;
        }
    }

    for (let i = 0; i < TitaldeHilos.length; i++) {
     
            TitaldeHilos[i] = (TitaldeHilos[i] / Tickets[i]).toFixed(2);
        }
    
    

        const resultado = [];

        for (let i = 0; i < TitaldeHilos.length; i++) {
          resultado.push([TitaldeHilos[i], Empresa[i]]);
        }

        resultado.sort((a, b) => parseFloat(b[0]) - parseFloat(a[0]));

        // Eliminar los que tengan "0.00"
        let filteredData = resultado.filter(item => item[0] !== "0.00");
        
        redistribuir(filteredData)

       function redistribuir(filteredData){
        for (let a = 0; a < filteredData.length; a++) { 

            TitaldeHilos1[a] = filteredData[a][0];
            Empresa1[a] = filteredData[a][1];

        }}
     
}

 
  

  var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: -1,
        max: 8,
      },
      x: {
        ticks: { color: '#000000' },
      },
    },
  };

  var midata = {
    labels: Empresa1,
    datasets: [
      {
        label: 'Indice',
        data: TitaldeHilos1,
        backgroundColor: '#451952',
      },
    ],
  };

  return <div> <h1 className='TituloGrafica'>Indice de Seguimiento Prolongado</h1> <Bar data={midata} options={misoptions} /></div>
  
}


