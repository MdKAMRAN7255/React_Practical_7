import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {

    if(!sessionStorage.getItem("loginData")){
        return <Navigate to="/" replace />;
    }
    return children;
}
export default Protected;