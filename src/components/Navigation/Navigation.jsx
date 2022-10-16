import css from '../Navigation/Navigation.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className={css.wraper}>
        {!isLoggedIn ? (
          <NavLink end to={'/'} className={css.link}>
            Home
          </NavLink>
        ) : (
          <NavLink end to={'/contacts'} className={css.link}>
            Contacts
          </NavLink>
        )}
      </div>
    </>
  );
}
