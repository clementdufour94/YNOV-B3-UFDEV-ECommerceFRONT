import React, {useEffect, Component} from 'react'
import Header from './Header'
import Home from './Home'
import './App.css';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Login from "./Login"
import Payment from "./Payment"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51K1CSAEzxIhF9A3EPodZy28tDf3j09wK1opR6EReT0k7MkxyEJ2lrdPBqZxllM8DIrrsmTUFe4MB0QdaiI9NX6Uv00MRqACOg9');



function App() {
  const [{}, dispatch] = useStateValue();
  
  
  useEffect(()=>{

    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>>', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
           type: 'SET_USER',
          user:null
        })

      }
    })

  }, []);
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
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
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
