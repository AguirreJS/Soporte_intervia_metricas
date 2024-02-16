import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Empresa, Tiempo } from './TiempoEnNumEmpresas'; 

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
    plugins: {
        // Configuración del complemento backgroundColor
        backgroundColor: {
            // Establece el fondo del gráfico
            color: 'rgba(0, 0, 5, 0.1)' // Puedes ajustar el color y la opacidad según tus necesidades
        }}
};




export default function Pies() {

    function sumaValoresNumericos(arr) {
        let suma = 0;
        for (const valor of arr) {
          if (typeof valor === 'number') {
            suma += valor;
          }
        }
        return suma;
      }
      
      // Calcular la suma de los valores numéricos en el array
      const sumaTotal = sumaValoresNumericos(Tiempo);
      
      // Calcular los porcentajes
      const porcentajes = Tiempo.map((valor) => {
        if (typeof valor === 'number') {
          return ((valor / sumaTotal) * 100).toFixed(2);
        } else {
          return "0.00"; // Tratar valores no numéricos como 0.00%
        }
      });
      
     

var data = {
    labels: Empresa,
    datasets: [
        {
            label: 'Porcetaje Tiempo Invertido',
            data: porcentajes,
            backgroundColor: [
              
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',

            
              
            ],
            borderColor: [
              'black',
            
              
            ],
            borderWidth: 1,
        },
    ],
};


    return  <div className='PorTiempo'> <h1 className='TituloGrafica2'> Porcetaje Tiempo Invertido por Empresa</h1> <Pie className='Fondo' data={data} options={options} /></div>
}
