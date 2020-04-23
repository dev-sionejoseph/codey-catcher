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
import SpouseGenderSelect from './components/SpouseGenderSelect'
import KidsOrPetsSelect from './components/KidsOrPetsSelect'

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
              <div className="choices">
                <SpouseGenderSelect />
                <KidsOrPetsSelect />
              </div>
              <Catcher />
              <div className="answers">
                <LifeAnswer name="spouse"/>
                <LifeAnswer name="home"/>
                <LifeAnswer name="city"/>
                <LifeAnswer name="dependents"/>
                <LifeAnswer name="transportation"/>
              </div>
            </Route>
            <Route path="/askcodey">
              <Navbar />
              <QuestionInput />
              <Catcher />
            </Route>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
