import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Patient } from '../types/types';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL 
  }),
  endpoints: (builder) => ({
    getPatientData: builder.query({
      query: () => 'patient-data.json',
      transformResponse: (response: { patientData: Patient }) => response.patientData
    }),
  }),
});


export const { useGetPatientDataQuery } = patientApi;