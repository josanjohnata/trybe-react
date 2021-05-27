import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
    this.buttonJoin = this.buttonJoin.bind(this);
    
  }

  buttonJoin() {
    this.setState((estadoAnterior) => ({
      clicks: estadoAnterior.clicks + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.buttonJoin}>{this.state.clicks}</button>
      </div>
    )
  }
}

export default App;
