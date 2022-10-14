import css from '../AppBar/AppBar.module.css';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { FcContacts } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.conteiner}>
        <FcContacts className={css.icon} />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <Menu />}
      </div>
    </header>
  );
}
