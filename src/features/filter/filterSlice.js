import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    filterPrice:"",
    filterCategory:""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addSearch: (state, action) => {
            state.search=action.payload;
        },
        addFilterPrice:(state, action)=>{
            state.filterPrice=action.payload
        },
        addFilterCategory:(state,action)=>{
            state.filterCategory=action.payload
        }
    },
});

export const { addSearch,addFilterCategory,addFilterPrice } = filterSlice.actions;
export default filterSlice.reducer;
