import { configureStore } from '@reduxjs/toolkit';
import { emergencyApi } from './emergencySlice';

export const store = configureStore({
  reducer: {
    [emergencyApi.reducerPath]: emergencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emergencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;