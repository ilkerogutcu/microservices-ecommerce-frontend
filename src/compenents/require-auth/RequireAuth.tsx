import React from 'react'
import { Navigate } from 'react-router-dom';
import ROUTES from '../../core/app/route/routes';
import useAppContext from '../../core/app/util/useAppContext';

interface Props  {
    children: React.ReactElement,
  };
function RequireAuth({ children }: Props) {
    const {
        appState: { currentUser },
      } = useAppContext();
      
   return currentUser
    ? children
    : <Navigate to={ROUTES.LOGIN} replace />;
}

export default RequireAuth