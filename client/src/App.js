import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import About from './components/about.js'
import Dashboard from './components/dashboard.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
      <header className="App-header">
          <Switch>
          <Route path="/about" component = {About} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
