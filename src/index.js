import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bar from './TiempoEnNumEmpresas';
import Tabla from './Tabla'
import Pie from './PorcetajeTiempo'
import Pssa from './PromedioDificultad'
import Demanda from './DemandaTiempoReal';
import Progre from './ContadorPregresivoVariado'
import Indice from './IndiceSeguimientoProlongado'
import Top from './TopsClave'
import ConTK from './ContadorTicketEnfocado'



var Bul = 1;





renderApp() 


export function renderApp() {



  
  // Utiliza createRoot en lugar de render

    const root = ReactDOM.createRoot(document.getElementById('root'));
  
    root.render(
      <React.StrictMode>
        
        <App />
        <div className='FondoBl'  id='DisplayCargando' > <div className='center-rotate'>   <img id='carga' className='cargando' src='metricas4.png'></img></div></div>
        <div className="contenedor">
      <div className="izquierda"><Bar /></div>
      <div className="izquierda"> <Demanda /></div>
      <div className="derecha"> <Pie/> </div>
      <div className="derecha">  <Pssa/> </div>
     
     
     
      
    </div>
  
    <div className='Tabla'><Tabla/> </div>
    <div className='Progre'> <Progre/>  <Indice/>  </div>
    <div className='Progre'><Top/> <ConTK/></div>
 
      </React.StrictMode>
    );
  }
  

  

















  document.addEventListener("DOMContentLoaded", function () {
    // Función para agregar el manejador de eventos cuando BBu1 esté disponible
    function agregarManejador() {

 

      const elementoBBu1 = document.getElementById("BBu1");
  
      // Verificar si el elemento existe
      if (elementoBBu1) {
        elementoBBu1.addEventListener("click", rendergo);
      } else {
        // Si el elemento no existe aún, espera un poco y vuelve a verificar
        setTimeout(agregarManejador, 100);
      }
    }
  
    // Función que se ejecutará cuando se haga clic en el elemento BBu1
    function rendergo() {
      Bul = 0;
    
      setTimeout(function() {
        renderApp();
        Desaparecer();
        acelerar (); // Reemplaza "otraFuncion()" con el nombre de la segunda función que deseas ejecutar.
      }, 2000);
      
    }
  
    // Agregar el manejador de eventos
    agregarManejador();
  });
  
  // También puedes usar el evento 'load' en caso de que haya recursos externos que deben cargarse
  window.addEventListener("load", function () {
    // Realiza acciones adicionales si es necesario después de cargar completamente la página
  });

    
  document.addEventListener("DOMContentLoaded", function () {
    // Función para agregar el manejador de eventos cuando BBu1 esté disponible
    function agregarManejador() {

      
 
      const elementoBBu1 = document.getElementById("BBu2");
  
      // Verificar si el elemento existe
      if (elementoBBu1) {
        elementoBBu1.addEventListener("click", rendergo);
      } else {
        // Si el elemento no existe aún, espera un poco y vuelve a verificar
        setTimeout(agregarManejador, 100);
      }
    }
  
    // Función que se ejecutará cuando se haga clic en el elemento BBu1
    function rendergo() {
  
      Bul = 0;
    
      setTimeout(function() {
        renderApp();
        Desaparecer();
        acelerar (); // Reemplaza "otraFuncion()" con el nombre de la segunda función que deseas ejecutar.
      }, 2000);
      
    }
  
    // Agregar el manejador de eventos
    agregarManejador();
  });
  
  // También puedes usar el evento 'load' en caso de que haya recursos externos que deben cargarse
  window.addEventListener("load", function () {
    // Realiza acciones adicionales si es necesario después de cargar completamente la página
  });
  

      
  document.addEventListener("DOMContentLoaded", function () {
    // Función para agregar el manejador de eventos cuando BBu1 esté disponible
    function agregarManejador() {
      const elementoBBu1 = document.getElementById("BBu3");
  
      // Verificar si el elemento existe
      if (elementoBBu1) {
        elementoBBu1.addEventListener("click", rendergo);
      } else {
        // Si el elemento no existe aún, espera un poco y vuelve a verificar
        setTimeout(agregarManejador, 100);
      }
    }
  
    // Función que se ejecutará cuando se haga clic en el elemento BBu1
    function rendergo() {
      Bul = 0;
    
      setTimeout(function() {
        renderApp();
        Desaparecer();
        acelerar (); // Reemplaza "otraFuncion()" con el nombre de la segunda función que deseas ejecutar.
      }, 2000);
      
    }
  
    // Agregar el manejador de eventos
    agregarManejador();
  });
  
  // También puedes usar el evento 'load' en caso de que haya recursos externos que deben cargarse
  window.addEventListener("load", function () {
    // Realiza acciones adicionales si es necesario después de cargar completamente la página
  });
  
  function Desaparecer() {
    // Obtén una referencia al elemento



  
    if (Bul == 0) {
    
      const elemento = document.getElementById('DisplayCargando');
  
      if (elemento) {

        elemento.remove();
if(elemento) {  setTimeout(Desaparecer, 1000) }

     

      } 
    }
  }

  function acelerar () {

    var miElemento = document.getElementById("carga");
    if(miElemento) {

// Cambia la duración de la animación a 2 segundos
miElemento.style.animationDuration = "2s";}
  }


  

