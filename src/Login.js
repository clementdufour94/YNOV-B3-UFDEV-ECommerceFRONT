import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"
import logo from './img/Image2.png'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);
    const [userId, setUserId] = useState(null);

    const signIn = e =>{
        //e.preventDefault();
        //auth.signInWithEmailAndPassword(email, password).then(auth =>{
            //history.push('/')
        //}).catch(error => alert(error.message))
        if(display==true){ //Bouton create ducoup
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                
                  name: name,
                  
                  email: email,
                  password: password,
                  password_confirmation: passwordConfirmation
                }),
              };
              fetch("http://localhost:8000/api/signin", requestOptions)
                .then((response) => response.json())
                .then((data) => setUserId(data.id));
        }else if(display ==false){
            console.log("false")

        }
    }
    const register = e =>{
        e.preventDefault();
        //auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            
            //if (auth){
                //history.push('/')
            //}

        //})
        //.catch(error=>alert(error.message));
        setDisplay(true)
    }
  return (
    <div className="login">
        <Link to='/'> 
            <img className="login__logo" src={logo} alt=''>
            </img>

        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form>

                <h5 style={{ display: display ? "block" : "none" }}>Name</h5>
                <input style={{ display: display ? "block" : "none" }} type="text" value={name} onChange={e=> setName(e.target.value)}></input>
                
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input  type="password" value={password} onChange={e=> setPassword(e.target.value)}></input>

                
                

                <h5 style={{ display: display ? "block" : "none" }}>Password Confirmation</h5>
                <input style={{ display: display ? "block" : "none" }} type="password" value={passwordConfirmation} onChange={e=> setPasswordConfirmation(e.target.value)}></input>
               
                
            </form>
            <button  onClick={signIn} className="login__signInButton">{display ? "Create" : "Sign in" }</button>
            <p>
                By signing-in you agree to Clemazon's
                 Conditions of Use & Sale. Please
                 see our Privacy Notice, our Cookies Notice
                 and our Interest-Based Adds Notice.
            </p>
            <button onClick={register} className="login__registerButton">Create Clemazon account</button>

        </div>

    </div>
  )
}

export default Login