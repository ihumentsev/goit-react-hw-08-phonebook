import css from '../UserMenu/UserMenu.module.css';
import LoginControl from 'components/LoginControl/LoginControl';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperatione';
import authSelectors from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className={css.wraper}>
      <p> You are logged in as: {userName}</p>
      {/* <button onClick={() => dispatch(logOut())}>Logout</button> */}
      <LoginControl />
    </div>
  );
}
