import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom dia!" />
    </div>
, elemento);


// const jsx = <h1>Olá React</h1>;
// ReactDOM.render(<h1>Olá React 2</h1>, elemento);