import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import Pokemons from './components/pokemon.js'
import Dashboard from './components/dashboard.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


var imgSrc = "https://seeklogo.com//images/P/Pikachu-logo-D0AAA93F17-seeklogo.com.png"
function App() {
  return (
    <Router>
    <div className="App">
    <Nav imgSrc={imgSrc} />
      <header className="App-header">
          <Switch>
          <Route exact path="/">
            <h1 className='whiteFont'>Welcome to Pokemon World</h1>
            <img src={imgSrc} className='App-logo' alt="logo"/>
          </Route>
          <Route path="/pokemons" component = {Pokemons} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
