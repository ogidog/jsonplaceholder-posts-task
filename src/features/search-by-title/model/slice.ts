import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    searchText: string
}

const initialState: IState = {searchText: ""}

export const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const {setSearchText} = searchSlice.actions;


