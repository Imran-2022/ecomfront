import { createSlice,current } from '@reduxjs/toolkit';
const initialState = {
    promoCode:"",
    cart: []
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart=action?.payload?.data;
        },
        incrementQuantity: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload);
            if (itemInCart) {
                console.log("hahaha");
              itemInCart.count++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload);
            if (item.count === 1) {
                item.count = 1
            } else {
                item.count--;
            }
        },
        addPromoCode:(state,action)=>{
            if(action.payload=="2023"){
                state.promoCode="2023"
            }
        },
       
        removeItem: (state, action) => {
            const removeItems = state.cart.filter((item) => item._id !== action.payload);
            state.cart = removeItems;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    addPromoCode
} = cartSlice.actions;
