import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const user = useSelector((store) => store.user);

  return (
    user ? children : <Navigate to="/" />
  );
}

export default PrivateRoute;
