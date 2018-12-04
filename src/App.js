import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter.js'
import CounterGroup from './Component/CounterGroup.js'

class App extends Component {
  render() {
    return (
      <CounterGroup size={3}/>
    );
  }k
}

export default App;