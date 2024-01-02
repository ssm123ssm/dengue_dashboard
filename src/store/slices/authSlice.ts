import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { User } from '@/interfaces/User';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  expiry: 0,
  profile: {
    userName: '',
    email: '',
    firstName: '',
    lastName: ''
  }
} as any;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthData: (state) => {
      const stateCopy = state;
      stateCopy.refreshToken = null;
      stateCopy.accessToken = null;
      stateCopy.isAuthenticated = false;
      stateCopy.expiry = 0;
      stateCopy.profile.userName = '';
      stateCopy.profile.email = '';
      stateCopy.profile.firstName = '';
      stateCopy.profile.lastName = '';
    },
    setSSOAuthData: (state, { payload, type}) => {
      const stateCopy = state;

      const {name,preferred_username, email} = payload.idToken.claims;
      
      stateCopy.isAuthenticated = true;
      stateCopy.accessToken = payload.accessToken.accessToken;
      stateCopy.expiry= payload.accessToken.expiresAt;
      stateCopy.profile.userName = preferred_username;
      stateCopy.profile.email = email;
      stateCopy.profile.firstName = name;
      stateCopy.profile.lastName = '';
    }
  },
  extraReducers: (builder) => {
  },
});

export const selectAccessToken = (state: any) => state.authReduce.accessToken;
export const selectProfile = (state: any) => state.authReduce.profile as User;

export const { clearAuthData, setSSOAuthData } = authSlice.actions;

export default authSlice.reducer;
