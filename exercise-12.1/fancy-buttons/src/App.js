import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.buttonJoin = this.buttonJoin.bind(this);
    this.buttonOut = this.buttonOut.bind(this);
    this.buttonPrint = this.buttonPrint.bind(this);

  }

  buttonJoin() {
    console.log(this)
    console.log('Você acabou de entar!');
  }
  
  buttonOut() {
    console.log(this)
    console.log('Você acabou de sair!');
  }
  
  buttonPrint() {
    console.log(this)
    console.log('Você acabou de imprimir!');
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonJoin}>Entar</button>
        <button onClick={this.buttonPrint}>Imprimir</button>
        <button onClick={this.buttonOut}>Sair</button>
      </div>
    )
  }
}

export default App;
