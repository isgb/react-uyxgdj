import React, { Component } from 'react';
import './style.css';

function A(props) {
  //console.log(props.children);
  //return <p>Hola {props.nombre}</p>;
  return props.children;
}

function B(props) {
  return <p>{props.nombre} : 10</p>;
}

function MiComponente() {
  return <p></p>;
}

class MiComponenteDeClase extends Component {
  render() {
    return <p>Hola soy de la clase</p>;
  }
}

export default function App() {
  let nombre = 'Uriel';
  return (
    <div>
      <MiComponente />
      <MiComponenteDeClase />

      <A nombre="Isaías">
        <p>{2 + 3 + 5}</p>
      </A>
      <B nombre={nombre} f={() => {}} />
    </div>
  );
}
