import React from 'react';

//components for routing
import {Route, Switch} from 'react-router-dom'; 

//will redirect user to login page if user is not logged in
import PrivateRoute from './components/PrivateRoute'; 

import './App.css';

//components for routes
import Home from './components/Home'; 

import CampaignList from './components/CampaignList'; 
import CampaignDetails from './components/CampaignDetails'; 

import DonorDetails from './components/DonorDetails'
import AddDonorPage from './components/AddDonorPage'; 

import LoginPage from './components/LogInForm'; 
import RegisterPage from './components/RegisterPage'; 
import EditDonorPage from './components/EditDonorPage'; 
import EditCampaignPage from './components/EditCampaignPage'; 




//redux
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 

//logger
import { logger } from 'redux-logger'

//reducer 
import rootReducer from './reducers'



function App() {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk)); 

  return (

    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>

          {/* <PrivateRoute path="/adddonor" component={AddDonorPage}/> */}
          <Route path="/editDonor" component={EditDonorPage}/>
          <Route path="/editCampaign" component={EditCampaignPage}/>

          <PrivateRoute path='/home' component={Home}/>
          <PrivateRoute path='/campaigns' component={CampaignList}/>
          <PrivateRoute path='/campaign/:id' component={CampaignDetails}/>
          <PrivateRoute path='/donor/:id' component={DonorDetails} />
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
