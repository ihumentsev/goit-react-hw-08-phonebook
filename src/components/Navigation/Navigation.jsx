import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div>
        <NavLink end to={'/'}>
          home
        </NavLink>
        <NavLink to={'/contacts'}>Contacts</NavLink>
      </div>
    </>
  );
}
