import { createApi } from '@reduxjs/toolkit/query/react'
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: () => ({}),
})
