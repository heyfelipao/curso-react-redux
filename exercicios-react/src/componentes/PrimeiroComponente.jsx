import React from 'react';

let isLegal = true;

//uso da props
export default (props) =>  (
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>Legal? {isLegal ? 'Sim' : 'Nao'}</p>
        <p>{Math.random() *10}</p>
    </div>
);


// export default () => <h1>Primeiro Componente com arrow function  !</h1>;

// export default function() {
//     return <h1>Primeiro Componente!</h1>;
// }

// function primeiro() {
//     return <h1>Primeiro Componente</h1>;
// }
// export default primeiro;