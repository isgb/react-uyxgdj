import React, { Component } from 'react';
import './style.css';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  syncEmailChanges(email) {
    //console.log(email);
    this.setState({
      email: email,
    });
  }

  syncPasswordChangesd(password) {
    this.setState({
      password: password,
    });
  }

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submirForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={(ev) => {
            //this.syncEmailChanges(ev.target.value);
            this.syncChanges(ev.target.value, 'email');
          }}
          type="text"
          value={this.state.email}
          placeholder="Escribe el texto"
        />
        <input
          onChange={(ev) => {
            //this.syncPasswordChangesd(ev.target.value);
            this.syncChanges(ev.target.value, 'password');
          }}
          type="password"
          value={this.state.password}
          placeholder="*****"
        />
        <div>
          <input
            onClick={this.submirForm}
            type="submit"
            value="Iniciar sesion"
          />
        </div>
      </form>
    );
  }
}

export default function App() {
  let nombre = 'Uriel';
  return (
    <div>
      <Formulario />
    </div>
  );
}
