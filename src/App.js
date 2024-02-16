import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Filtro from "./Filtro";
import LinesChart from "./LinesChart";
import Pie from "./PorcetajeTiempo";
import React, { useState, useEffect } from 'react';
import { arraydConstructor } from './Filtro';


function App() {


  return (
    <div className="App">
      <Filtro></Filtro>
   
    
    </div>
  );
}

export default App;
