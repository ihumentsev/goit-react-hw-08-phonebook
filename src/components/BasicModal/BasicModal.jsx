import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import ContactForm from 'components/ContactForm/ContactForm';
// import { css } from '@emotion/react';
import css from '../BasicModal/BasicModal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ContactForm formClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
