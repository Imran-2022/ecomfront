import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    filterPrice: "",
    filterCategory: "",
    pagination: {
        currentPage: 1,
        limit: 3,
        totalCount: 1,
    },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addSearch: (state, action) => {
            state.search = action.payload;
        },
        addFilterPrice: (state, action) => {
            state.filterPrice = action.payload
        },
        addFilterCategory: (state, action) => {
            state.filterCategory = action.payload
        },
        clearFilter: (state, action) => {
            state.search = "";
            state.filterPrice = "";
            state.filterCategory = "";
        },
        setLimit: (state, action) => {
            state.pagination.limit = parseInt(action.payload) || 5;
        },
        setPage: (state, action) => {
            state.pagination.currentPage = parseInt(action.payload) || 1;
        },
        setTotalCount: (state, action) => {
            state.pagination.totalCount = parseInt(action.payload) || 1;
        },
    },
});

export const { addSearch, addFilterCategory, addFilterPrice, clearFilter,setLimit,setPage,setTotalCount } = filterSlice.actions;
export default filterSlice.reducer;
