import { apiSlice } from "../api/apiSlice";
import { addToCart } from "./cartSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addToCartt: builder.mutation({
            query: (data) => ({
                url: "/api/cart",
                method: "POST",
                body: data,
            }),
        }),
        deleteCartItem: builder.mutation({
            query: (id) => ({
                url: `/api/cart/${id}`,
                method: "DELETE",
            }),
        }),
       
        getCartItem: builder.mutation({
            query: () => ({
                url: "/api/cart",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(addToCart(result))

                } catch (err) {
                    // do nothing
                }
            },
        }),
     
        updateCartItem: builder.mutation({
            query: (data) => ({
                url: "/api/cart",
                method: "PUT",
                body:data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // console.log("TRY");
                    // console.log(result,"result")
                    // dispatch(addCategory(result?.data))

                } catch (err) {
                    // do nothing
                }
            },
        }),
        
    }),
    
});

export const { useAddToCarttMutation,useGetCartItemMutation,useUpdateCartItemMutation,useDeleteCartItemMutation } = cartApi;
