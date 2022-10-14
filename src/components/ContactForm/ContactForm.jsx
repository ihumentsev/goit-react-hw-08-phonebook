import css from '../ContactForm/ContactForm.module.css';
import Fab from '@mui/material/Fab';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function ContactForm({ closeModal }) {
  const contacts = useSelector(state => state.contacts.contacts);

  const isUpdate = useSelector(state => state.contacts.upDate);
  console.log(isUpdate);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const addName = contacts.map(el => el.name).includes(name);
    if (addName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
      };

      dispatch(addContacts(contact));
    }
    formReset();
    closeModal();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    isUpdate && dispatch(getContacts());
  }, [isUpdate, dispatch]);

  return (
    <>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label}>
          Name
          <input
            autofocus
            className={css.input}
            placeholder="Jacob Mercer"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            placeholder="+380507408745"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>

        <Fab type="submit" color="primary" aria-label="add">
          <MdOutlinePersonAddAlt />
        </Fab>
      </form>
    </>
  );
}
