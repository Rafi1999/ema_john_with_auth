import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate,useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    let location = useLocation()
    if(loading){
        return <div>...loading</div>
    }    
    if(user){
            return children;
        }
        return <Navigate to='/login' state={{from:location}} replace></Navigate>;
    };

export default PrivateRoute;