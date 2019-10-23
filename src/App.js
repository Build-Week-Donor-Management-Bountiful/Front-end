import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

//components for routes
import Nav from './components/Nav'; 
import Home from './components/Home'; 
import CampaignList from './components/CampaignList'; 
import CampaignDetails from './components/CampaignDetails'; 
import DonorDetails from './components/DonorDetails'

//forms (not created yet) 
//import EditCampaign from '../components/CampaignForm'; 
//import EditDonor from '../components/EditDonor'; 
//import AddCampaign from '../components/AddCampaign'; 
//import AddDonor from './components/AddDonor'; 

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
        
          <Route path='/' component={Nav}/>
          <Route path='/home' component={Home}/>
          <Route path='/campaigns' component={CampaignList}/>
          <Route path='/campaign/:id' component={CampaignDetails}/>
          <Route path='/donor/:id' component={DonorDetails} />
          
          
          {/* Routes for forms
            *<Route to='/editCampaign/:id' component={EditCampaign} />
            *<Route to='/editDonor/:id' component={EditDonor}/>
            *
            *<Route to='/addCampaign' component={AddCampaign} />
          */}
        
        
      </div>
    </Provider>
  );
}

export default App;
