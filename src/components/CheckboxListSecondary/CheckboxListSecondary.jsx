import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from 'redux/operations';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ContactForm from 'components/ContactForm/ContactForm';
import ModalBox from 'components/ModalBox/ModalBox';
import shortid from 'shortid';

export default function CheckboxListSecondary() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = e => {
    console.log(e.target.nodeName);
    if (e.target.nodeName !== 'BUTTON') {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  //   const style = {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     width: 400,
  //     bgcolor: 'background.paper',
  //     border: '2px solid #000',
  //     boxShadow: 24,
  //     p: 4,
  //   };

  return (
    <List
      key={shortid.generate()}
      dense
      sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper' }}
    >
      {contacts.map(contact => {
        return (
          <>
            <ListItemButton key={shortid.generate()} onClick={handleOpen}>
              <ListItemAvatar key={shortid.generate()}>
                <Avatar key={shortid.generate()} />
              </ListItemAvatar>
              <ListItemText key={shortid.generate()}>
                {contact.name}
              </ListItemText>

              <Button
                key={shortid.generate()}
                onClick={() => dispatch(removeContacts(contact.id))}
                variant="outlined"
                color="error"
              >
                DELETE
              </Button>
            </ListItemButton>
            {/* <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <ContactForm formClose={handleClose} />
              </Box>
            </Modal> */}
            <ModalBox
              key={shortid.generate()}
              openModal={open}
              closeModal={handleClose}
            >
              <ContactForm key={shortid.generate()} />
            </ModalBox>
          </>
        );
      })}
    </List>
  );
}
