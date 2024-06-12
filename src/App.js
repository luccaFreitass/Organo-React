import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

// const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  // setColaboradores([...colaboradores, colaborador])
}

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
