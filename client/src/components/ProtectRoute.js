import React from 'react';
import {Redirect, Route} from 'react-router-dom';

function ProtectRoute ({component: Component, ...restProps}) { 
    const authenticate = localStorage.getItem("authenticate");

    return(
        <Route {...restProps} render={(props) => authenticate ? 
            <Component {...props} /> : <Redirect to="/login" />
        
        }/>

    )
}

export default ProtectRoute;