import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emergencyApi = createApi({
  reducerPath: 'emergencyApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL 
  }),
  endpoints: (builder) => ({
    getEmergencyKinds: builder.query({
      query: () => 'emergency-kinds.json',
      transformResponse: (response: { emergencyKinds: Array<{id: number, name: string}> }) => response.emergencyKinds
    }),
  }),
});

export const { useGetEmergencyKindsQuery } = emergencyApi;