import { NavLink } from 'react-router-dom';
import css from '../Menu/Menu.module.css';

export default function Menu() {
  return (
    <>
      <div className={css.wraper}>
        <NavLink to={'/register'} className={css.link}>
          SignIn
        </NavLink>
        <NavLink to={'/login'} className={css.link}>
          logIn
        </NavLink>
      </div>
    </>
  );
}
