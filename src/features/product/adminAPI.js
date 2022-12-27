import { apiSlice } from "../api/apiSlice";
import { addCategory,addProductToState } from "./AdminSlice";

export const adminAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (data) => ({
                url: "/api/category",
                method: "POST",
                body: data,
            })
        }),
        getCategory: builder.mutation({
            query: (data) => ({
                url: "/api/category",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(addCategory(result?.data))

                } catch (err) {
                    // do nothing
                }
            },
        }),
        createProducts: builder.mutation({
            query: (data) => ({
                url: "/api/product",
                method: "POST",
                body: data,
            })
        }),
        getProducts: builder.mutation({
            query: ({sortBy,order,limit}) => ({
                url: `/api/product?sortBy=${sortBy}&order=${order}&limit=${limit}`,
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(addProductToState(result?.data))

                } catch (err) {
                    // do nothing
                }
            },
        }),
        getProduct: builder.mutation({
            query: (id) => ({
                url: `/api/product/${id}`,
                method: "GET",
            }),
        })
    }),
    
});

export const { useCreateCategoryMutation,useGetCategoryMutation,useCreateProductsMutation,useGetProductsMutation,useGetProductMutation } = adminAPI;
