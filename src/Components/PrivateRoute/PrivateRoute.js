// import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
   const { user } = useAuth();
   const location = useLocation();
   // if (!user?.email) {
   //    return <CircularProgress />
   // }
   if (user?.email) {
      return children
   }
   else{
      return <Navigate to="/login" state={{ from: location }} />
   }
   
   

};

export default PrivateRoute;