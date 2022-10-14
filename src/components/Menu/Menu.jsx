import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div>
        <NavLink to={'/register'}>Sign In</NavLink>
        <NavLink to={'/login'}>log In</NavLink>
      </div>
    </>
  );
}
