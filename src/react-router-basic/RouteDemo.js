import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';


const RouterDemo = ()=> (
  <Router>
    <Route path={'/home'} component={Home}/>
    <Route path={'/about'} component={About}/>
    <Route component={NotFound}/>
  </Router>
);

export default RouterDemo;