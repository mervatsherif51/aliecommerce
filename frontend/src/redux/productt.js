// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const producttApi = createApi({
  reducerPath: "producttApi",
  baseQuery: fetchBaseQuery({
    // @ts-ignore
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getproducttByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproducttByNameQuery } = producttApi;
