import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import EditForm from 'components/EditForm/EditForm';
import Avatar from '@mui/material/Avatar';
import css from '../ChildModal/ChildModal.module.css';
import { FcDataConfiguration } from 'react-icons/fc';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ contact }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Edit contact</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <EditForm contact={contact} click={handleClose} />

          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ contactItem }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FcDataConfiguration className={css.btn_icon} onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div className={css.wraper}>
            <Avatar className={css.icon} />
            <h3 id="parent-modal-title">User name:</h3>
            <p className={css.text} id="parent-modal-description">
              {contactItem.name}
            </p>
            <h3 id="parent-modal-title">User number:</h3>
            <p className={css.text} id="parent-modal-description">
              {contactItem.number}
            </p>
          </div>
          <ChildModal contact={contactItem} />
        </Box>
      </Modal>
    </div>
  );
}
