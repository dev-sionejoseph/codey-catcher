import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Instructions from './components/Instructions'
import Catcher from './components/Catcher'
import LifeAnswer from './components/LifeAnswer'
import NameInput from './components/NameInput'
import QuestionInput from './components/QuestionInput'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
                <Instructions />
            </Route>
            <Route path="/divination">
              <Navbar />
              <Catcher />
              <div className="answers">
                <LifeAnswer />
                <LifeAnswer />
                <LifeAnswer />
                <LifeAnswer />
              </div>
            </Route>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
