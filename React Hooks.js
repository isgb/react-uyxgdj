import React, { Component, useState } from 'react';
import './style.css';

function Contador(props) {
  const [conntador, setContador] = useState(1);
  return (
    <div>
      <p>Contador : {conntador}</p>
      <button onClick={() => setContador(conntador + 1)}>Aumentar</button>
    </div>
  );
}

export default function App() {
  let nombre = 'Uriel';
  return (
    <div>
      <Contador />
    </div>
  );
}
