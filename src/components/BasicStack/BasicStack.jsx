// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { css, styled } from '@mui/material/styles';
import c from '../BasicStack/BasicStack.module.css';
import Fab from '@mui/material/Fab';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
// import AddIcon from '@mui/icons-material/Add';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>
            <div className={c.wrap}>
              <h3>hfghgjgjgj</h3>
              <p>6546464656546</p>
              <button>delete</button>
            </div>
          </Item>
          <Item>
            <div className={c.wrap}>
              <h3>hfghgjgjgj</h3>
              <p>6546464656546</p>
              <button>delete</button>
            </div>
          </Item>
          <Item>
            <div className={c.wrap}>
              <h3>hfghgjgjgj</h3>
              <p>6546464656546</p>
              <button>delete</button>
            </div>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
