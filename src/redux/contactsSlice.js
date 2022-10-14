import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './operations';
// import {
//   getContacts,
//   addContacts,
//   removeContacts,
// } from '../redux/operation/contactsOperation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
    upDate: false,
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContacts.pending]: (state, action) => {
      state.isLoading = true;
      state.upDate = false;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.upDate = true;
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.upDate = false;
      state.error = action.payload;
    },
    [removeContacts.pending]: state => {
      state.isLoading = true;
      state.upDate = false;
    },
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.upDate = true;
      // state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    [removeContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.upDate = false;
      state.error = payload;
    },
  },
});

export const { add, remove, filter } = contactsSlice.actions;
export default contactsSlice.reducer;
