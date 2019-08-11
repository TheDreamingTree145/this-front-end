import React from 'react';
import logo from './logo.svg';
import {globalContext} from './situation_creator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {globalContext()}
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
