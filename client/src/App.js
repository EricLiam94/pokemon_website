import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import Pokemons from './components/pokemon.js'
import About from './components/about.js'
import PokeDetail from './components/pokeDetail.js'
import {BrowserRouter as Router, Switch, Route ,useParams} from 'react-router-dom'


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
            <h2 className='whiteFont'> This website is still under development </h2>
            <img src={imgSrc} className='App-logo' alt="logo"/>
          </Route>
          <Route  exact path="/pokemons" component = {Pokemons} />
          <Route path="/pokemons/:id" component = {PokeDetail} />
          <Route path="/about" component={About} />
              
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
