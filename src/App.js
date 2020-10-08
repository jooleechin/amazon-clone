import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Checkout from './Checkout'
import Home from './Home'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          {/* default route always has to be at the bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
