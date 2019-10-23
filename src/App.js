import React from 'react';

import {Route, Switch} from 'react-router-dom'
import './App.css';

//components for routes
import Nav from './components/Nav'; 
import Home from './components/Home'; 
import CampaignList from './components/CampaignList'; 
import CampaignDetails from './components/CampaignDetails'; 
import DonorDetails from './components/DonorDetails'
import LoginPage from './components/LogInForm'; 
import RegisterPage from './components/RegisterPage'; 
import AddDonorPage from './components/AddDonorPage'; 


//redux
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 

//logger
import { logger } from 'redux-logger'

//reducer 
import rootReducer from './reducers'



function App() {
  const store = createStore(rootReducer, applyMiddleware(logger)); 

  return (

    <Provider store={store}>
      <div className="App">
        
          <Route exact path="/" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/adddonor" component={AddDonorPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/campaigns' component={CampaignList}/>
          <Route path='/campaign/:id' component={CampaignDetails}/>
          <Route path='/donor/:id' component={DonorDetails} />
          
          
          
        
        
      </div>
    </Provider>

  );
}

export default App;
