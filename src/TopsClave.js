
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
 export var Clave= []
 export var Empresa1 = []
export var Tiempo = []


export default function Topclaves() {

     
    for (let i = 0; i < arraydConstructor.length; i++) {  
        for (let a = 0; a < arraydConstructor[i].length; a++) {  
        Clave.push(arraydConstructor[i][a].clave);

      }
     }
     Clave = Clave.filter(item => item !== null && item !== undefined);

// Transformar cada string en el formato deseado
Clave = Clave.flatMap(item => {
    // Dividir el string por comas y envolver cada palabra en comillas dobles
    return item.split(',').map(palabra => `"${palabra.trim()}"`);
});

let datos = Clave

datos = datos.map(item => {
    return item.replace(/\"\"/g, "\"").replace(/^\"|\"$/g, "").trim();
});

// Transformar a minúscula
datos = datos.map(item => item.toLowerCase());

// Contabilizar las apariciones
var conteo = {};
datos.forEach(item => {
    if (conteo[item]) {
        conteo[item]++;
    } else {
        conteo[item] = 1;
    }
});

// Crear array con estructura [Palabra, cantidad]
var resultado = [];
for (var palabra in conteo) {
    if (conteo[palabra] > 2) {
        resultado.push([palabra, conteo[palabra]]);
    }
}

// Ordenar de mayor a menor según cantidad de apariciones
resultado.sort((a, b) => b[1] - a[1]);

    var Palabras = [];
    var Cantidad = [];
for (let i = 0; i < resultado.length; i++) {

            Palabras[i] = resultado[i][0]
            Cantidad[i] = resultado[i][1]
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
        min: 2,
        max: 25,
      },
      x: {
        ticks: { color: '#000000' },
      },
    },
  };

  var midata = {
    labels: Palabras,
    datasets: [
      {
        label: 'Palabras',
        data: Cantidad,
        backgroundColor: '#537188',
      },
    ],
  };

  return <div> <h1 className='TituloGrafica'>Palabras claves mas repetidas</h1> <Bar data={midata} options={misoptions} /></div>
  
}


