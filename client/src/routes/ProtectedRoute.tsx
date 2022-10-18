import { Navigate } from 'react-router-dom';
import { tokenStorage } from '../utils/tokenStorage';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = tokenStorage.getAuthToken();
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

type ProtectedRouteProps = { children: JSX.Element };
