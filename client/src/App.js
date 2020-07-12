import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './components/homescreen'
import WithdrwalDetails from './components/withdrwalDetail';
import Otp from './components/otp';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/details" component={WithdrwalDetails} />
            <Route exact path="/pin" component={Otp} />
          </Switch>          
        </div>
    </div>
    </Router>    
  );
}

export default App;
