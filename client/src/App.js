import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users.js'
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
        <img src={logo} className="App-logo" alt="logo" />
       <Users/>
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
