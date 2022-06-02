import React from 'react';
import './App.css';
import CicloVida from './components/CicloVida';
import  ComunicacionComponentes  from './components/ComunicacionComponentes';
import {EventosEs6, EventosEs7} from './components/Eventos';
import PeticionesAsync from './components/PeticionesAsync';
import RenderiazadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import ScroolHooks from './components/ScroolHooks';
import UseSate from './components/UseState';

function App() {
  return (
    <div className="App">
      <ScroolHooks/>
      <UseSate titulo='hola'/>
      {/* <PeticionesAsync/> */}
      {/* <CicloVida/> */}
        {/* <RenderiazadoCondicional/> */}
      <hr/>
      {/* <RenderizadoElementos/> */}
      <hr/>
      {/* <EventosEs6/>
      <EventosEs7/>  */}
      <hr/> 
      {/* <ComunicacionComponentes/> */}
    </div>
  );
}

export default App;
