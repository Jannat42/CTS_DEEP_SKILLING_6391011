import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './Component/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      clicked: false,
    };
  }

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  sayHello = () => {
    alert("Hello! Member!");
  };

  incrementAndGreet = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticClick = (message) => {
    alert(message);
  };


  render() {
    return (
      <div className="App">
        <h1>React Currency Converter App</h1>

        <p>{this.state.counter}</p>
        <button onClick={this.incrementAndGreet}>Increment</button>
        <br /><br />

        <button onClick={this.decrement}>Decrement</button>
        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome!")}>
          Say welcome
        </button>
        <br /><br />

        <button onClick={() => this.handleSyntheticClick("I was clicked")}>
          Click on me
        </button>
        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
