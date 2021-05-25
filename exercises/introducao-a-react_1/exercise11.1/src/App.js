import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const taskList = ['Ler um livro', 'Revisar JS', 'Descansar', 'Trybe'];
class App extends Component {
  render() {
    return (
      <ul>{ taskList.map(task => Task(task)) }</ul>
    );
  }
}

export default App;
