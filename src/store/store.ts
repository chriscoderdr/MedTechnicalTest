import { configureStore } from '@reduxjs/toolkit';
import { emergencyApi } from './emergencySlice';
import { patientApi } from './patientSlice';

export const store = configureStore({
  reducer: {
    [emergencyApi.reducerPath]: emergencyApi.reducer,
    [patientApi.reducerPath]: patientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(emergencyApi.middleware)
      .concat(patientApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;