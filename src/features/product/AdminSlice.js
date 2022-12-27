import jwt_decode from 'jwt-decode'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    products:[]
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories=action.payload;
        },
        addProductToState:(state, action)=>{
            state.products=action.payload
        }
    },
});

export const { addCategory,addProductToState } = adminSlice.actions;
export default adminSlice.reducer;
