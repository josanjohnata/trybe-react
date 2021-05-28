import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
    this.buttonJoin = this.buttonJoin.bind(this);
    this.changeColor = this.changeColor.bind(this);
    
  }

  buttonJoin() {
    this.setState((estadoAnterior) => ({
      clicks: estadoAnterior.clicks + 1
    }))
  }

  changeColor() {
    this.setState((estadoAnterior) => ({
      clicks: estadoAnterior.clicks % 2 === 0
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.clicks}</h1>
        <button onClick={this.buttonJoin} style={{
          backgroundColor: this.state.clicks % 2 === 0 ? 'green' : 'gray'
          }}>Number</button>       
      </div>
    )
  }
}

export default App;
