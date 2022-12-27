import jwt_decode from 'jwt-decode'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories=action.payload;
        },
      
    },
});

export const { addCategory } = adminSlice.actions;
export default adminSlice.reducer;
