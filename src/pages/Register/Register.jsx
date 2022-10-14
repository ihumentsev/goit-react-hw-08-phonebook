import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperatione';

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
      <form onSubmit={hendelSubmit}>
        <input
          name="name"
          placeholder="plese enter your name"
          type="text"
          value={name}
          onChange={hendelChange}
        />
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
        <button type="submite">Sign up</button>
      </form>
    </>
  );
}
