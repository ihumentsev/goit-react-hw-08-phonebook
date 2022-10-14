import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function ModalBox({ openModal, closeModal, children }) {
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

  return (
    <Modal open={openModal} onClose={closeModal}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
