import { Navigate } from 'react-router-dom';
import { tokenStorage } from '../utils/tokenStorage';

export const RedirectRoute = ({ children }: RedirectRouteProps) => {
  const token = tokenStorage.getAuthToken();
  if (token) {
    return <Navigate to="/todo" />;
  }
  return children;
};

type RedirectRouteProps = { children: JSX.Element };
