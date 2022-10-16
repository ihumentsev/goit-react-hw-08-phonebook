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
import Pagination from 'components/Pagination/Pagination';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts.contacts);
  const isUpdate = useSelector(state => state.contacts.upDate);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  // const [totalPage, setTotalPage] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  ///////////////////////////
  const totalPage = [];

  const arraySplitter = (arr, qtyItems) => {
    let countItems = 0;
    const lengthArr = arr.length;
    const splitter = arr => {
      if (countItems >= lengthArr) {
        return;
      }
      totalPage.push(arr.slice(countItems, countItems + qtyItems));
      countItems = countItems + qtyItems;
      splitter(arr);
    };
    splitter(arr);
    return totalPage;
  };

  arraySplitter(contacts, 3);

  const handelPagination = e => {
    console.log(e);
    setPage(e);
  };

  ////////////////////////////
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
          <div className={css.wraper}>
            <Fab
              className={css.btn}
              onClick={handleOpen}
              color="primary"
              aria-label="add"
              size="large"
              fontSize="40"
            >
              <MdOutlinePersonAddAlt className={css.icon} />
            </Fab>
            <Filter />
          </div>
          <ModalBox openModal={open} closeModal={handleClose}>
            <ContactForm closeModal={handleClose} />
          </ModalBox>
          {contacts.length !== 0 ? (
            <CheckboxListSecondary arr={totalPage} page={page} />
          ) : (
            <div className={css.content}>
              You don't have contacts yet! Please add a new contact.
            </div>
          )}
          <Pagination
            pages={totalPage.length}
            handelPagination={handelPagination}
          />
        </section>
      </Container>
    </>
  );
}
