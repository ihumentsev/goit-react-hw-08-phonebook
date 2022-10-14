import CheckboxListSecondary from 'components/CheckboxListSecondary/CheckboxListSecondary';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';
import css from '../Contacts/Contacts.module.css';
import Fab from '@mui/material/Fab';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import ModalBox from 'components/ModalBox/ModalBox';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchInput from 'components/SearchInput/SearchInput';

export default function Contacts() {
  const isUpdate = useSelector(state => state.contacts.upDate);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  useEffect(() => {
    isUpdate && dispatch(getContacts());
  }, [isUpdate, dispatch]);

  return (
    <>
      <Container>
        <section className={css.section}>
          <Fab
            className={css.btn}
            onClick={handleOpen}
            color="primary"
            aria-label="add"
            size="large"
            font-size="40"
          >
            <MdOutlinePersonAddAlt className={css.icon} />
          </Fab>
          <SearchInput />
          <ModalBox openModal={open} closeModal={handleClose}>
            <ContactForm closeModal={handleClose} />
          </ModalBox>
          <CheckboxListSecondary />
        </section>
      </Container>
    </>
  );
}
