// APP será el Provider que proveerá la información para los componentes hijos

import React from 'react';
import { FeriadosProvider } from './FeriadosContext';
// import ListaFeriados from './components/ListaFeriados';
import GeneradorFeriados from './components/GeneradorFeriados'

function App() {
  return (
    <FeriadosProvider>
      <div className="App">
        <h1>Feriados en Chile</h1>
        {/* <ListaFeriados />    Esto es el componente que CONSUME el contexto, en este caso el que mostrará la lista de feriados */}
        <GeneradorFeriados />   {/* Esto es el componente que CONSUME el contexto, en este caso el generador aleatorio de feriados */}
      </div>
    </FeriadosProvider>
  );
}

export default App;

