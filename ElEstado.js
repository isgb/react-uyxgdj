import React, { Component } from 'react';
import './style.css';

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }

  aumentar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <div>{this.state.contador}</div>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    );
  }
}

export default function App() {
  let nombre = 'Uriel';
  return (
    <div>
      <Contador />
    </div>
  );
}
