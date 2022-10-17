import css from '../LoginControl/LoginControl.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperatione';

export default function LoginControl() {
  const [loading] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={css.wraper}>
      <FormControlLabel
        className={css.color}
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => dispatch(logOut())}
            name="loading"
            color="primary"
          />
        }
      />
      <span className={css.text}>LogOut</span>
    </div>
  );
}
