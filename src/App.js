import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>


    </div>
  );
}

export default App;
