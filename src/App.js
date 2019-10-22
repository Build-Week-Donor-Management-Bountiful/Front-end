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
//import AddDonor from '../components/AddDonor'; 



function App() {
  return (
    <div className="App">
      <Switch>
        <Route to='/' component={Nav}/>
        <Route to='/home' component={Home}/>
        <Route to='/campaigns' component={CampaignList}/>
        <Route to='/campaign/:id' component={CampaignDetails}/>
        <Route to='/donor/:id' component={DonorDetails} />

        
        {/* Routes for forms
          *<Route to='/editCampaign/:id' component={EditCampaign} />
          *<Route to='/editDonor/:id' component={EditDonor}/>
          *<Route to='/addDonor' component={AddDonor} />
          *<Route to='/addCampaign' component={AddCampaign} />
        */}
      </Switch>
      
    </div>
  );
}

export default App;
