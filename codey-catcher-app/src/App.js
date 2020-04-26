import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import Catcher from './components/Catcher';
import DivinationsPage from './pages/DivinationsPage';
import AskCodeyPage from './pages/AskCodeyPage';
import LoveOrLossPage from './pages/LoveOrLossPage';


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Instructions />
            </Route>
            <Route path="/divination">
              <DivinationsPage />
            </Route>
            <Route path="/askcodey">
              <AskCodeyPage />
            </Route>
            <Route path="/loveorloss">
              <LoveOrLossPage />
            </Route>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
