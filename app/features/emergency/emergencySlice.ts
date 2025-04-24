import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emergencyApi = createApi({
  reducerPath: 'emergencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/' }),
  endpoints: (builder) => ({
    getEmergencyKinds: builder.query({
      query: () => 'emergency-kinds.json',
      transformResponse: (response: { emergencyKinds: Array<{id: number, name: string}> }) => response.emergencyKinds
    }),
  }),
});

export const { useGetEmergencyKindsQuery } = emergencyApi;