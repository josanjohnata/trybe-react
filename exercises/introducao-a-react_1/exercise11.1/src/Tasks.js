import React, { Component } from 'react';

const task = ['Ler um livro', 'Revisar JS', 'Descansar', 'Trybe'];
class Tasks extends Component {
  render() {
    return (
      <ul>{ tarefas.map(task => Task(task)) }</ul>
    );
  }
}

export default Tasks;