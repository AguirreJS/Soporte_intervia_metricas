import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { arraydConstructor } from './Filtro';
import App from './App'; // Asegúrate de que la ruta sea correcta
import ReactDOM from 'react-dom/client';
import Tabla from './Tabla';

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
export var Tiempo = []


export default function BarsChart() {

  
Empresa = []
Tiempo = []


var TitaldeHilos1 = [];
var Empresa1 =[];




 arrayd()
    
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
    
        ordenarMayorMenor (Empresa , Tiempo )
   
      
       
  }

  function ordenarMayorMenor (empre , tiempo ) {

    const resultado = [];

for (let i = 0; i < empre.length; i++) {
  resultado.push([empre[i], tiempo[i]]);
}

let filteredData = resultado.filter(item => parseFloat(item[1]) !== 0);
let sortedData = filteredData.sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]));

redistribuir(sortedData);

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
        max: 24,
      },
      x: {
        ticks: { color: '#007bff' },
      },
    },
  };

  var midata = {
    labels: TitaldeHilos1,
    datasets: [
      {
        label: 'Tiempo',
        data: Empresa1,
        backgroundColor: '#007bff',
      },
    ],
  };

  return <div> <h1 className='TituloGrafica'>Tiempo invertido por Empresa </h1> <Bar data={midata} options={misoptions} /></div>
  
}


