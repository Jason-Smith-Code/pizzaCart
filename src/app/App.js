import React from 'react';
import './App.css';
import { Counter } from '../features/counter/Counter';
import { Login } from '../features/login/Login';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}></img>
        <Login />
      </header>
      <div className="main">
        <Counter />
      </div>
    </div>
  );
}

export default App;
