import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users.js'
import Nav from './components/nav.js'

function App() {
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Users/>
        <a
          className="App-link"
          href="/"
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
