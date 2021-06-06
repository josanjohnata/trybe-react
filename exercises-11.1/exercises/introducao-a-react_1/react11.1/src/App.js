import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const TaskList = ['Acordar', 'Tomar banho', 'Tomar café', 'Estudar na Trybe'];

class App extends React.Component {
  render() {
    return (
      <ul>{ TaskList.map(task => Task(task)) }</ul>
    )
  }
}

export default App;
