import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { arraydConstructor } from './Filtro';



ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
}

// Define la variable arrP
export var arrP = [];


export var Sectores = [];

export var porcentajesArray = [];


export default function Puntos() {





  


function sumarPuntuacionesPorEmpresa(data) {
  const sumaPuntuaciones = {}; // Un objeto para almacenar la suma de puntuaciones por empresa

  // Recorremos el arreglo de objetos
  for (const empresaTickets of data) {
    const empresa = empresaTickets[0].empresa; // Obtenemos el nombre de la empresa

    // Inicializamos la suma de puntuaciones para la empresa si aún no existe
    if (!sumaPuntuaciones[empresa]) {
      sumaPuntuaciones[empresa] = 0;
    }

    // Sumamos las puntuaciones de todos los tickets de la empresa
    for (const ticket of empresaTickets) {
      sumaPuntuaciones[empresa] += parseInt(ticket.puntuacion); // Parseamos a entero la puntuación
    }
  }

  // Convertimos el objeto en un arreglo de objetos
  const resultado = Object.entries(sumaPuntuaciones).map(([empresa, suma]) => ({
    empresa,
    suma,
  }));

  for (let i = 0; i < arraydConstructor.length; i++) {   
    Sectores[i] =  arraydConstructor[i].length;
  
      }

  return resultado;
}

// Llamamos a la función con tu conjunto de datos
const resultado = sumarPuntuacionesPorEmpresa(arraydConstructor);

function separarYReemplazar(objeto) {
  const sumas = [];
  const empresas = [];

  for (const item of objeto) {
    const suma = isNaN(item.suma) ? 0 : item.suma;
    sumas.push(suma);
    empresas.push(item.empresa);
  }
  

   arrP = [ sumas , empresas  ];

  return { sumas, empresas }
}



let empresas = separarYReemplazar(resultado).empresas;
let sumas = Promediodedificultad();

function Promediodedificultad(){

  let PromedioARD = [];
    for (let i = 0; i < Sectores.length; i++) {
      PromedioARD[i] =   (arrP[0][i] / Sectores[i]).toFixed(2); ; // Reducir a un decimal
    }

    calcularPorcentajes(PromedioARD)

return PromedioARD

}


function calcularPorcentajes(array) {

  // Paso 1: Calcular la suma total de los valores en el array
  const valoresNumericos = array.map((valor) => parseFloat(valor));
  const sumaTotal = valoresNumericos.reduce((total, valor) => total + valor, 0);

  // Paso 2: Calcular los porcentajes y guardarlos en un nuevo array
 let porcentajes = valoresNumericos.map((valor) => ((valor / sumaTotal) * 100).toFixed(2));

 porcentajesArray = porcentajes ;}


 

      
     

var data = {
    labels: empresas,
    datasets: [
        {
            label: 'Dificultad',
            data: sumas,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


var data2 = {
  labels: empresas,
  datasets: [
      {
          label: 'Dificultad',
          data: porcentajesArray,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
      },
  ],
};

return (
  <div>
    <h3 className='Graf2'> Promedio Dificultad y Porcentaje por Empresa</h3>
  <div> 
    <Pie data={data} options={options} /> </div>
    <div>
    <Pie data={data2} options={options} /></div></div>
 
)}