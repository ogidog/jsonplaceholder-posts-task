import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IState {
    order: "Asc" | "Desc" | "UnSort"
}

const initilaState: IState = {
    order: "UnSort"
}

export const sortSlice = createSlice({
    name: "sort",
    initialState: initilaState,
    reducers: {
        setOrder: (state, action: PayloadAction<IState["order"]>) => {
            state.order = action.payload;
        }
    }
});

export default sortSlice.reducer;
export const {setOrder} = sortSlice.actions;
