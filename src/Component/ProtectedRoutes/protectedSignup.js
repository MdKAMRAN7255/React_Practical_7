import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedSignup = ({children}) => {

    if(sessionStorage.getItem("loginData")){
        return <Navigate to="/home" replace />
    }
    return children;
}
export default ProtectedSignup;