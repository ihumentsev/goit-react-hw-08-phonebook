import { filter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const changeFilter = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <>
      <TextField
        label="Search contact"
        id="outlined-size-normal"
        type="text"
        name="name"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
      />
    </>
  );
}
