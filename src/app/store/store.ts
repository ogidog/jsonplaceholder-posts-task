import {configureStore} from "@reduxjs/toolkit";
import {baseApi} from "shared/api/baseApi";
import {searchSlice} from "features/search-by-title/model/slice";
import {paginationSlice} from "features/pagination/model/slice";
import {sortSlice} from "features/sort-by-title/model/slice";

export const store = configureStore({
    reducer: {
        [searchSlice.name]: searchSlice.reducer,
        [paginationSlice.name]: paginationSlice.reducer,
        [sortSlice.name]: sortSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

