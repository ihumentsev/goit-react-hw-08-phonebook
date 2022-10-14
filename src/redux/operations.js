import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const getContacts = createAsyncThunk(
  'contacts/get',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts', credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/delete',
  async (id, credentials) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`, credentials);
      console.log(data);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  }
);
