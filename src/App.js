import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto'}}>
      <Router>
        <h1>Nav</h1>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/add' component={AddUser}/>
        <Route path='/edit/:id' component={EditUser}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
