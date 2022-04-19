import React from 'react'
import Header from './Header'
import Home from './Home'
import './App.css';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/checkout">
          <Checkout />

          </Route>
          
          <Route path="/">
            <Home />
          </Route>

        </Switch>
     
      
      
    </div>

    </Router>
    
  );
}

export default App;
