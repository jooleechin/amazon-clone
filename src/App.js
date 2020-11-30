import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Header from './Header';
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import './App.css';

function App() {
  const [{}, dispatch] = useStateValue()

  // will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('user', authUser)
      if (authUser) {
        // the user just loggin in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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

          {/* default route always has to be at the bottom */}
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
