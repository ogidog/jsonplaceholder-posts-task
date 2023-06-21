import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    postCounter: number,
    selectedPageNumber: number
}

const initialState: IState = {
    postCounter: 0,
    selectedPageNumber: 0,
}

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: initialState,
    reducers: {
        setPostCounter: (state, action: PayloadAction<number>) => {
            state.postCounter = action.payload;
        },
        setPageNumber: (state, action: PayloadAction<number>) => {
            state.selectedPageNumber = action.payload;
        }
    }
});

export default paginationSlice.reducer;
export const {setPostCounter, setPageNumber} = paginationSlice.actions;
