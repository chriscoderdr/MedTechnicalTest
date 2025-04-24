import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

export type Patient = {
  name: string;
  age: string;
  medicalRecord: {
    id: string;
    diagnosis: string;
    intervention: string;
    evaluation: string;
    requestTime: string;
    suspensions: string;
  };
};

export const { useGetPatientDataQuery } = patientApi;