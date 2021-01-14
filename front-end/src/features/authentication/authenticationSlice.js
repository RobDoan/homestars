import { createSlice } from '@reduxjs/toolkit';

import * as AuthService from '../../services/authService'

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    loggedInUser: null,
    token: null,
    loginFailedMessage: []
  },
  reducers: {
    loginSuccess: (state, action) => {
      const {token, user} = action.payload
      state.token = token
      state.loggedInUser = user
      state.loginFailedMessage = []
    }
  },
});

export const {loginSuccess} = authenticationSlice.actions;

export const login = userParams => dispatch => {
  AuthService.login(userParams).then(data => {
    const {token, user} = data
    dispatch(loginSuccess({token, user}))
  })
};

export const isUserLoggedIn = state => !!state.authentication.token
export const loggedInUser = state => state.authentication.loggedInUser

export default authenticationSlice.reducer;
