import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import "./Login.css"

function Login() {
      const history = useHistory()
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const signIn = e => {
            e.preventDefault()
            // firebase login happens here
            auth.signInWithEmailAndPassword(email, password)
                  .then(auth => {
                        history.push('/')
                  })
                  .catch(err => alert(err.message))
      }

      const register = e => {
            e.preventDefault()
            // firebase login happens here
            auth.createUserWithEmailAndPassword(email, password)
                  .then((auth) => {
                        if (auth) history.push('/')
                  })
                  .catch((err) => {
                        alert(err.message)
                  })
      }

      return (
            <div className="login">
                  <Link to ="/">
                        <img 
                              className="login__logo"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                              alt="amazon logo"
                        />
                  </Link>
                  <div className="login__container">
                        <h1>Sign-in</h1>
                        <form>
                              <h5>E-mail</h5>
                              <input 
                                    type="text" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                              />

                              <h5>Password</h5>
                              <input 
                                    type="password" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                              />

                              <button 
                                    className="login__signInButton"
                                    type="submit"
                                    onClick={signIn}
                              >Sign In</button>
                        </form>

                        <p>
                              By signing-in you agree to the Joolee's AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads.
                        </p>

                        <button onClick={register} className="login__registerButton">Create an Account</button>
                  </div>
            </div>
      )
}

export default Login
