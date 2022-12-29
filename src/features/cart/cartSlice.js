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
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
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



// // src/pages/Home.js
// const cart = useSelector((state) => state.cart)

// const getTotalQuantity = () => {
//   let total = 0
//   cart.forEach(item => {
//     total += item.quantity
//   })
//   return total
// }
{/* <div className='shopping-cart' onClick={() => navigate('/cart')}>
  <ShoppingCart id='cartIcon'/>
  <p>{getTotalQuantity() || 0}</p>
</div> */}