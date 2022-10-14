import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, featchCurrentUser } from './authOperatione';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [register.pending](state, action) {
    //   console.log(state, action);
    //   // state.user = action.paylod.user;
    //   // state.token = action.paylod.token;
    //   // state.isLoggedIn = true;
    // },
    [register.fulfilled](state, action) {
      console.log(state, action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [featchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [featchCurrentUser.rejected](state, action) {
      state.user = { name: null, email: null };
    },
  },
});

export const authReduser = authSlice.reducer;
