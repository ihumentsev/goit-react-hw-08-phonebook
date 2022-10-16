import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperatione';
import css from '../Register/Register.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendelChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const user = { name, email, password };
    console.log(user);
    dispatch(register(user));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <section className={css.section}>
        <form onSubmit={hendelSubmit} className={css.form}>
          <TextField
            className={css.input}
            label="Plese enter your name"
            name="name"
            placeholder="plese enter your name"
            type="text"
            value={name}
            onChange={hendelChange}
          />
          <TextField
            className={css.input}
            label="Your email"
            name="email"
            type="email"
            onChange={hendelChange}
            value={email}
          />
          <TextField
            className={css.input}
            label="Your password"
            name="password"
            type="text"
            value={password}
            onChange={hendelChange}
          />
          <Button className={css.btn} type="submite" variant="contained">
            Sign up
          </Button>
        </form>
      </section>
    </>
  );
}
