import React, {useEffect} from 'react'
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
            <Payment />
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
