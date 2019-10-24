import React from 'react';

//components for routing
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'; 


//will redirect user to login page if user is not logged in
import PrivateRoute from './components/PrivateRoute'; 

import './App.css';

//components for routes
import Home from './components/Home'; 

import CampaignList from './components/CampaignList'; 
import CampaignDetails from './components/CampaignDetails'; 

import DonorsList from './components/DonorsList'; 
import DonorDetails from './components/DonorDetails'; 
import AddDonorPage from './components/AddDonorPage'; 

import LoginPage from './components/LogInForm'; 
import RegisterPage from './components/RegisterPage'; 
import EditDonorPage from './components/EditDonorPage'; 
import EditCampaignPage from './components/EditCampaignPage'; 
import UserSettingPage from './components/UserSettingPage'; 
import Header from './components/Header'; 







//redux
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 

//logger
import { logger } from 'redux-logger'

//reducer 
import rootReducer from './reducers'
import Testing from './components/Test';



function App() {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk)); 

  return (


    <Provider store={store}>
      <div className="App">



        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>


            {/* <PrivateRoute path="/adddonor" component={AddDonorPage}/> */}
            <Route path="/editDonor" component={EditDonorPage}/>
            <Route path="/editCampaign" component={EditCampaignPage}/>
            <Route path="/userSetting" component={UserSettingPage}/>
            <PrivateRoute path="/adddonor" component={ (props) => <AddDonorPage {...props}/>}/>
            <PrivateRoute path='/home' component={Home}/>


            <Route path='/campaigns' component={CampaignList}/>
            <Route path='/campaign/:id' component={CampaignDetails}/>

            <Route path='/donors' component={DonorsList}/>
            <Route path='/donor/:id' component={DonorDetails} />
            
          </Switch>
        </Router>



      </div>
    </Provider>

  );
}

export default App;
