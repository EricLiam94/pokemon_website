import React from 'react';
import './App.css';
import Users from './components/users.js'
import Nav from './components/nav.js'
import About from './components/about.js'
import Dashboard from './components/dashboard.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
var imgSrc = "https://seeklogo.com//images/P/Pikachu-logo-D0AAA93F17-seeklogo.com.png"
function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={imgSrc} className="App-logo" alt="logo" />
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
