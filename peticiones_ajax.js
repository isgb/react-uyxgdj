import React, { Component } from 'react';
import './style.css';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    //console.log("Estoy listo");
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    /*
    promesa.then((response) => {
      //console.log(response);
      response.json().then((data) => {
        console.log(data);
      });
    });
    */

    promesa.then((response) =>
      response.json().then((data) => {
        this.setState({
          articles: data,
        });
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.articles.map((articles) => {
          return <p>{articles.title}</p>;
        })}
      </div>
    );
  }
}

export default function App() {
  let nombre = 'Uriel';
  return (
    <div>
      <Blog />
    </div>
  );
}
