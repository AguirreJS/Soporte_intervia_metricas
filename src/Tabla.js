
import React, { useState , useEffect } from 'react';
import 'react-data-grid/lib/styles.css';
import { Empresa, Tiempo } from './TiempoEnNumEmpresas';
import DataGrid from 'react-data-grid';
import { arrP , Sectores , porcentajesArray } from './PromedioDificultad';
import Claves from './Palabraclave';

export default  function Tabla() {



    const [variablesListas, setVariablesListas] = useState(false);

    useEffect(() => {
      // Verifica si todas las variables tienen datos asignados
      if (Empresa.length > 0 && Tiempo.length > 0 && arrP.length > 0  && Sectores.length > 0 && porcentajesArray.length > 0) {
        setVariablesListas(true);
      }
    }, []);
  
    // Renderiza el componente solo si todas las variables están listas
    if (!variablesListas) {
      return (
        <div ><h1>Aguardando datos...</h1></div>
      );
    }




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
      
      




const columns = [
  { key: 'id', name: 'Empresa',width: 200 },
  { key: 'TKs', name: 'Tickets', width: 100 },
  { key: 'title2', name: 'Horas', width: 100 },
  { key: 'title1', name: ' %', width: 100 },
  { key: 'title3', name: 'Puntaje',width: 100 },
  { key: 'title4', name: 'Ø',width: 100 },
  { key: 'title5', name: '%',width: 100 },
  { key: 'title6', name: 'Palabras Clave',width: 350 },
];

function CorrectorNumerosDeTickets(Numero, SiesCero) {
    var resultado = [...Sectores];


    for (let i = 0; i < resultado.length; i++) {

      if (resultado[i] == 1 && arrP[0][i] == "0" ) { 

         resultado[i] = 0;
       
         

        }
      }
  return resultado
    }
  
  function Promediodedificultad(){

    let PromedioARD = [];
      for (let i = 0; i < Sectores.length; i++) {
        PromedioARD[i] =   (arrP[0][i] / Sectores[i]).toFixed(2); ; // Reducir a un decimal
      }
     
return PromedioARD

  }




const rows = RowE ();

function RowE () {
 let PalabraClave =  Claves(Empresa);
   let PromedioTotal = CorrectorNumerosDeTickets(Sectores , Tiempo);
   let PromedioTotal2 = Promediodedificultad();
    let IDlist = [];
    for (let i = 0; i < Empresa.length; i++) {
           
        const newRow = { id: Empresa[i], TKs : PromedioTotal[i] , title2: Tiempo[i] , title1 : porcentajes[i] + "%" , title3 : arrP[0][i] , title4 : PromedioTotal2[i], title5 : porcentajesArray[i] + "%" , title6 : PalabraClave[i].palabrasClave   };
        IDlist.push(newRow);

    }

return IDlist

} 



RowE ()
  return <div> <h1 className='TablaTotal' > Tabla de Metricas </h1> <DataGrid  columns={columns} rows={rows} /></div>;
}

