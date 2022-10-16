import css from '../UserMenu/UserMenu.module.css';
import LoginControl from 'components/LoginControl/LoginControl';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className={css.wraper}>
      <p className={css.text}>
        {' '}
        You are logged in as: <br /> {userName}
      </p>
      <LoginControl />
    </div>
  );
}
