import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function IntegerRouter({ children }) {
  const user = useSelector((store) => store.user);

  return (
    user?.crm ? children : <Navigate to="/integration" />
  );
}

export default IntegerRouter;
