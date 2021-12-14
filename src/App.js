import React from 'react';
import logo from './logo.svg';
import Fcomponent from "./Fcomponent";
import Ccomponetn from "./Ccomponetn";
import Afcomponent from "./Afcomponent"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponetn></Ccomponetn>
        <Afcomponent></Afcomponent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
