import { createSlice,current } from '@reduxjs/toolkit';
const initialState = {
    profile:{}
};
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addProfile: (state, action) => {
            state.profile=action.payload?.data;
        },
       
    },
});

export const profileReducer = profileSlice.reducer;
export const {addProfile} = profileSlice.actions;
