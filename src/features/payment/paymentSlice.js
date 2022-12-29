import { createSlice,current } from '@reduxjs/toolkit';
const initialState = {
    paymentCompleted:[]
};
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        getPaymentCompletedProduct: (state, action) => {
            state.paymentCompleted=action.payload;
        },
        
        addPaymentCompletedProduct: (state, action) => {
            state.paymentCompleted=action.payload;
        },
        
       
    },
});

export const paymentReducer = paymentSlice.reducer;
export const {getPaymentCompletedProduct,addPaymentCompletedProduct} = paymentSlice.actions;
