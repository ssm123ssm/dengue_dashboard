import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReduce from './slices/authSlice';
import commonReduce from './slices/commonSlice';
import storage from './storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: [
    'isAuthenticated',
    'profile',
    'expiry',
    'accessToken',
    'refreshToken',
  ],
};

const rootReducer = combineReducers({
  authReduce: persistReducer(authPersistConfig, authReduce),
  commonReduce: commonReduce,
});

export const store: any = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
