import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import { cartReducer } from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import adminSliceReducer from "../features/product/AdminSlice"
import { profileReducer } from "../features/profile/profileSlice";
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        admin:adminSliceReducer,
        filter:filterSlice,
        cart:cartReducer,
        profile:profileReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: false,
          }).concat(apiSlice.middleware),
});
