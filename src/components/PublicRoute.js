import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/selectors';

export default function PublicRoute({ restricted }) {
  console.log(restricted);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  console.log(shouldNavigate);
  return (
    <>{shouldNavigate ? <Navigate to="/contacts"></Navigate> : <Outlet />}</>
  );
}
