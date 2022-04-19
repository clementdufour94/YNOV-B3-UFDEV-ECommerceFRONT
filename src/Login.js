import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
    }
    const register = e =>{
        e.preventDefault();
    }
  return (
    <div className="login">
        <Link to='/'> 
            <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''>
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
                By signing-in you agree to AmaClone's
                 Conditions of Use & Sale. Please
                 see our Privacy Notice, our Cookies Notice
                 and our Interest-Based Adds Notice.
            </p>
            <button onClick={register} className="login__registerButton">Create AmaClone account</button>

        </div>

    </div>
  )
}

export default Login