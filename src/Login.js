import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"
import logo from './img/Image2.png'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth =>{
            history.push('/')
        }).catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            
            if (auth){
                history.push('/')
            }

        })
        .catch(error=>alert(error.message));
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
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)}></input>
                <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
            </form>
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