import React from 'react'
import Header from './Header'
import Home from './Home'
import './App.css';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Login from "./Login"

function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>

          <Route path="/login">
             <Login />
          
          </Route>


          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
     
      
      
    </div>

    </Router>
    
  );
}

export default App;
