import React from 'react'; 
import { Route, Redirect, withRouter } from 'react-router-dom'; 

const PrivateRoute = ({component: Component, ...rest}) => {

    return(
        <Route
            {...rest}
            render={props => {
                if(localStorage.getItem('token')){
                    return <Component {...props} />
                }else {
                    return <Redirect push to="/"/>
                }
            }}
            />
    )
}




export default PrivateRoute;