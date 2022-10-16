import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/selectors';

export default function PrivatRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{!isLoggedIn ? <Navigate to="/"></Navigate> : <Outlet />}</>;
}
