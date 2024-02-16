import './App.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ContadorProgresivo from './ContadorPregresivoVariado'; 
import Seguimiento from './IndiceSeguimientoProlongado'; 
import BarsChart, { Empresa } from './TiempoEnNumEmpresas'; // Ajusta la ruta según la ubicación real de tu archivo BarsChart
import Demanda from './DemandaTiempoReal';
var dayjs = require('dayjs');
export var metricas = [];



const UbicacionActual = "http://localhost:4000";



 function filtroTickets( inicio , fin) {

  fetch( UbicacionActual + '/SeguimientoDiario')
  .then(response => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
          throw new Error('Error al obtener los datos');
      }
      return response.json();
  })
  .then(data => {

    filtrarPorFecha(data.data, inicio , fin);
    
    
    function filtrarPorFecha(data, inicio, fin) {

      ContadorProgresivo(inicio , fin , data);
      Seguimiento(inicio , fin)

      if (!Array.isArray(data)) {
        console.error('El argumento data no es un array válido:', data);
        return;
      }
      const fechaInicio = new Date(inicio);
      const fechaFin = new Date(fin);
    
      metricas = data.filter(item => {
        // Convertir la fecha del item al formato AAAA/MM/DD
        const [dia, mes, ano] = item.fecha.split('-');
        const fechaItem = new Date(`${ano}/${mes}/${dia}`);
        return fechaItem >= fechaInicio && fechaItem <= fechaFin;
      });
   
    }




    
    


  })
  .catch(error => {
      console.error('Hubo un error al obtener los datos:', error);
  });


    let Empresas = [];

    fetch(UbicacionActual + "/solicitudemp", {

        method:"POST",
        headers: {"Content-type":"application/json"},
          })
           .then(res => res.json())
           .then(json =>  { 
      
      
              Empresas = json;
             
              
      })
    
let datos1 = [];

let datos = [];

var objeto = solicitud();

function solicitud() {
    fetch(UbicacionActual + "/Tkactualesparametricas", {
      method: "POST",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        const datosFormateados = json.map((objeto) => {
          const fechaParts = objeto.Fecha.split('/');
          const dia = fechaParts[0].padStart(2, '0'); // Añade un 0 al principio si es un solo dígito
          const mes = fechaParts[1].padStart(2, '0'); // Añade un 0 al principio si es un solo dígito
          const anio = fechaParts[2]; // Obtiene los cuatro dígitos del año.
          const fechaFormateada = `${anio}-${mes}-${dia}`;
          return {
            ...objeto,
            Fecha: fechaFormateada,
            ...datos1, // Aquí se combinan los datos de datos1 con los datos originales.
          };
        });
  
        Filtro(inicio, fin , datosFormateados )


      });
  }
  
          



    


      
      function Filtro(inicio, fin , objeto) {

     
       // Crea objetos de fecha
       const FechaparaRenderizar = [];

       const fechaInicio = dayjs(inicio);
       const fechaFin = dayjs(fin);
      
      
       for (let i = 0; i < objeto.length; i++) {
      
      
      
         let fechaAComparar = dayjs(objeto[i].Fecha);
      
      
      
         // Realiza la comparación
         if (fechaAComparar.isAfter(fechaInicio) && fechaAComparar.isBefore(fechaFin)) {
         
           FechaparaRenderizar.push(objeto[i]);
         } else {
      
         }
       }


       Renderizado(FechaparaRenderizar);


      
    
    }


    function Renderizado(Metricas) {
       


        const ArrayFinal = [];
      
        // Itera sobre cada objeto en Empresas
        for (let i = 0; i < Empresas.length; i++) {
          const empresaActual = Empresas[i].empresa;
          const objetosFiltrados = [];
      
          // Itera sobre cada objeto en Metricas y filtra por empresa
          for (let j = 0; j < Metricas.length; j++) {
            if (Metricas[j].empresa === empresaActual) {
              objetosFiltrados.push(Metricas[j]);
            }
          }
      
          // Si no se encontraron objetos para la empresa, guarda el nombre de la empresa
          if (objetosFiltrados.length === 0) {
            objetosFiltrados.push({ empresa: empresaActual, mensaje: 'No se encontraron datos' });
          }
      
          // Agrega los objetos filtrados al ArrayFinal
          ArrayFinal.push(objetosFiltrados);
        }

   
    Demanda(ArrayFinal)
    }













} 

export default filtroTickets;