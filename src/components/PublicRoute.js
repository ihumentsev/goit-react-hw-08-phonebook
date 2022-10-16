import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/selectors';

export default function PublicRoute({ restricted }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return (
    <>{shouldNavigate ? <Navigate to="/contacts"></Navigate> : <Outlet />}</>
  );
}
