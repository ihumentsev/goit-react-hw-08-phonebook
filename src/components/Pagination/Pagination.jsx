import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import css from '../Pagination/Pagination.module.css';

export default function BasicPagination({ pages, handelPagination }) {
  const handelChange = (e, p) => {
    handelPagination(p - 1);
  };

  return (
    <Stack spacing={2} className={css.wriper}>
      <Pagination
        className={css.wriper}
        count={pages}
        color="primary"
        onChange={handelChange}
      />
    </Stack>
  );
}
