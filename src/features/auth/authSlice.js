import jwt_decode from 'jwt-decode'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            const decoded = jwt_decode(action.payload.accessToken);
            const { email, name, role } = decoded;
            state.user = {email, name, role};
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
