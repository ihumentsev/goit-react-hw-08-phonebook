import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperatione';
import css from '../Login/Login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <section className={css.section}>
        <form onSubmit={hendelSubmit} className={css.form}>
          <TextField
            className={css.input}
            label="Email"
            id="outlined-size-normal"
            name="email"
            type="email"
            onChange={hendelChange}
            value={email}
          />
          <TextField
            className={css.input}
            label="Password"
            id="outlined-size-normal"
            name="password"
            type="text"
            value={password}
            onChange={hendelChange}
          />

          <Button className={css.btn} type="submite" variant="contained">
            Log in
          </Button>
        </form>
      </section>
    </>
  );
}
