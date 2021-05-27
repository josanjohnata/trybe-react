import logo from './logo.svg';
import './App.css';
import React from 'react';

function buttonJoin() {
  console.log('Você acabou de entar!');
}

function buttonOut() {
  console.log('Você acabou de sair!');
}

function buttonPrint() {
  console.log('Você acabou de imprimir!');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={buttonJoin}>Entar</button>
        <button onClick={buttonPrint}>Imprimir</button>
        <button onClick={buttonOut}>Sair</button>
      </div>
    )
  }
}

export default App;
