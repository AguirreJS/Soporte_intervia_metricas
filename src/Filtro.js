import filtroTickets from './FiltroTK';
import './App.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import showLoadingOverlay from './Cargando';
import ContadorPuntual from './ContadorTicketEnfocado'; 
import BarsChart, { Empresa } from './TiempoEnNumEmpresas'; // Ajusta la ruta según la ubicación real de tu archivo BarsChart
const dayjs = require('dayjs');
export const UbicacionActual = "http://localhost:4000";


// Llamar la función en el lugar que desees









export var arraydConstructor = [];

export var arraydConstructortkTiempoReal = [];

var Bulen = 1;


function Filtro(){


  
  //EnvioGet() 
function EnvioGet() {

  const UbicacionActual = "http://localhost:4000"; 

  fetch(UbicacionActual + '/sessiononline', { method: 'GET' })
  .then(res => res.json())
  .then(data => {
    if(data.online == true || data.online == "true" ) { console.log("En linea") } else { window.location.href = "https://www.soporte.intervia.com.ar/panel";
   };
  })
  .catch(error => {
    console.error('Error en la solicitud fetch:', error);
  });
} 

  

var datos ;
var datos1;
var Empresas = [];


SolicitarDatos()
function SolicitarDatos(){





 



fetch(UbicacionActual + "/solicitudemp", {

  method:"POST",
  headers: {"Content-type":"application/json"},
    })
     .then(res => res.json())
     .then(json =>  { 


        Empresas = json;
       
        
})




 fetch(UbicacionActual+"/metricastotales", {
   method:"POST",
   headers: { 
      "Content-type": "application/json",
   },
  
})
.then(res => res.json())
.then(json =>  {  
 datos = json;
 const datosFormateados = datos.map((objeto) => {

   const fechaParts = objeto.fecha.split('/');
   const dia = fechaParts[0].padStart(2, '0'); // Añade un 0 al principio si es un solo dígito
   const mes = fechaParts[1].padStart(2, '0'); // Añade un 0 al principio si es un solo dígito
   const anio = fechaParts[2]; // Obtiene los cuatro dígitos del año.
   const fechaFormateada = `${anio}-${mes}-${dia}`;
   return {
     ...objeto,
     fecha: fechaFormateada,
   };
 });

 datos1 = datosFormateados;

 }) }


//////////////////



function restarUnDia(fechaStr) {
  // Convertir la fecha de la cadena a un objeto Date
  const fecha = new Date(fechaStr);

  // Restar un día
  fecha.setDate(fecha.getDate() - 1);

  // Obtener el año, mes y día
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Sumamos 1 porque los meses empiezan en 0
  const dia = String(fecha.getDate()).padStart(2, '0');

  // Formatear la fecha de salida
  return `${año}-${mes}-${dia}`;
}





function Filtro(inicio, fin, objeto) {


  showLoadingOverlay();

  filtroTickets( inicio , fin) 


 // Crea objetos de fecha
 const FechaparaRenderizar = [];

 const fechaInicio = dayjs(inicio);
 const fechaFin = dayjs(fin);


 for (let i = 0; i < objeto.length; i++) {



   let fechaAComparar = dayjs(objeto[i].fecha);



   // Realiza la comparación
   if (fechaAComparar.isAfter(fechaInicio) && fechaAComparar.isBefore(fechaFin)) {
   
     FechaparaRenderizar.push(objeto[i]);
   } else {
 
   }
 }
 Renderizado(FechaparaRenderizar);
 BarsChart()
 ContadorPuntual(FechaparaRenderizar);

}

/////////////// TRANSFORMADOR DE FECHAS 
function transformadordefecha(fechaInicio){
let fecha_transformada = fechaInicio.replace(/\//g, "-");
var partes = fecha_transformada.split('-');
var fechaTransformada = partes[2] + '-' + partes[1] + '-' + partes[0];
return fechaTransformada}




   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
 
   const handleStartDateChange = (date) => {
     setStartDate(date);
   };
 
   const handleEndDateChange = (date) => {
     setEndDate(date);
   };


   const handleGuardarFechas = () => {

     if (startDate && endDate) {
       const fechaInicio = startDate.toLocaleDateString("es-ES", {
         year: "numeric",
         month: "2-digit",
         day: "2-digit",
       });
   
       const fechaFin = endDate.toLocaleDateString("es-ES", {
         year: "numeric",
         month: "2-digit",
         day: "2-digit",
       });

      
   let inicio = transformadordefecha(fechaInicio)
   let fin =transformadordefecha(fechaFin)
   ///////error fecha





   //////

       Filtro(restarUnDia(inicio), fin, datos1)


  
     }
   }
 /////////////// Esto hay que cambiarlo
   const MesActual = () => {
     const fechaActual = new Date();
     const anio = fechaActual.getFullYear();
     const mes = fechaActual.getMonth() + 1; // Sumar 1 al mes para obtener el mes actual (1-12)
     
     // Obtener la fecha de inicio del mes actual (01 del mes actual)
     const fechaInicio = `${'01'.padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;
     
     // Obtener la fecha de finalización del mes actual (último día del mes actual)
     const ultimoDia = new Date(anio, mes, 0);
     const diaFin = ultimoDia.getDate();
     const fechaFin = `${diaFin.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;
     
   
      
     let inicio = transformadordefecha(fechaInicio)
     let fin =transformadordefecha(fechaFin)

     Filtro(inicio, fin, datos1)
     
   } 

   const Mesanterior = () => {
     const fechaActual = new Date();
     // Obtener la fecha del primer día del mes anterior en formato "yyyy-mm-dd"
     const primerDiaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth() - 1, 1);
     const primerDiaMesAnteriorFormatted = `${primerDiaMesAnterior.getFullYear()}-${(primerDiaMesAnterior.getMonth() + 1).toString().padStart(2, '0')}-01`;
     
     // Obtener la fecha del último día del mes anterior en formato "yyyy-mm-dd"
     const ultimoDiaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0);
     const ultimoDiaMesAnteriorFormatted = `${ultimoDiaMesAnterior.getFullYear()}-${(ultimoDiaMesAnterior.getMonth() + 1).toString().padStart(2, '0')}-${ultimoDiaMesAnterior.getDate().toString().padStart(2, '0')}`;
     

     let inicio = ultimoDiaMesAnteriorFormatted;
     let fin =primerDiaMesAnteriorFormatted;


Filtro(fin, inicio , datos1)
   };



   function Renderizado(Metricas) {
     // Inicializa el array final vacío
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
   
    



     arraydConstructor = FiltroDeNoAbonados(ArrayFinal);

     

   }

    function FiltroDeNoAbonados(ListaPreFinal){

      var ListaFiltradaAbonados = []

      if (incluyeAbonados) { 
        
        return ListaPreFinal } else {

        for (let i = 0; i < Empresas.length; i++) {

        

         let miBooleano = Empresas[i].valid5 === "true" ? true : false;


        if (miBooleano == true ) { 
       
          ListaFiltradaAbonados[i] = ListaPreFinal[i]    }


        }

        function eliminarElementosVacios(array) {
          return array.filter(elemento => {
            return elemento !== undefined && elemento !== null && elemento !== "";
          });
        }
        
        // Ejemplo de uso
    
        let ListaSinElementosVacios = eliminarElementosVacios(ListaFiltradaAbonados);
        
        
        
        return ListaSinElementosVacios;



      }


    }


   const [incluyeAbonados, setIncluyeAbonados] = useState(false);
   const handleCheckboxChange = () => {
    setIncluyeAbonados(!incluyeAbonados);
  };

   return (

   <div className='franja'>
    <a href='/' >
   <img className='intervia' src='v.png' hreft ></img></a>
<div className="date-picker-container">
 <h2>Selecciona un rango de fechas:</h2>
 <div className="date-picker">
   <label>Inicio:</label>
   <DatePicker
     selected={startDate}
     onChange={handleStartDateChange}
     dateFormat="dd/MM/yyyy"
   />
 </div>
 <div className="date-picker">
   <label>Fin:</label>
   <DatePicker
     selected={endDate}
     onChange={handleEndDateChange}
     dateFormat="dd/MM/yyyy"
   />
 </div>
 <button id='BBu1' className="custom-button" onClick={handleGuardarFechas }>Buscar</button>
 <button id='BBu2' className="custom-button" onClick={ MesActual}>Mes Actual</button>
<button  id='BBu3' className="custom-button" onClick={Mesanterior}>Mes Anterior</button>
 <input
          type="checkbox"
          id="abonado"
          checked={incluyeAbonados}
          onChange={handleCheckboxChange}
        /> 
        <p className='incluir'> Inluir No Abonados </p>


</div>
</div> ) 
}


export default Filtro;