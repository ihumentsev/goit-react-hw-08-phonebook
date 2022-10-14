import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperatione';
import css from '../Login/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hendelChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const hendelSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(logIn(user));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <section className={css.section}></section>
      <form onSubmit={hendelSubmit}>
        <input
          name="email"
          placeholder="your email"
          type="email"
          onChange={hendelChange}
          value={email}
        />
        <input
          name="password"
          placeholder="your password"
          type="text"
          value={password}
          onChange={hendelChange}
        />
        <button type="submite">Log in</button>
      </form>
    </>
  );
}
