import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';

const Route = require('react-router-dom').Route;
const Switch = require('react-router-dom').Switch;
export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={['/', '/home']} component={Home}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
}