import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import './App.css';

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
