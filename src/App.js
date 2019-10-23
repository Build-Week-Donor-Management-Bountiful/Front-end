import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';


import NavBlock from './components/NavPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EditDonorPage from './components/EditDonorPage';


function App() {
  return (
    <div className="App">

      {/* Purposely did not use exact, because I want */}
      {/* NavBlock to be there always */}
      <Route path="/" component={NavBlock}/>


      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/editDonor" component={EditDonorPage}/>

    </div>
  );
}

export default App;
