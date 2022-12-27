import { apiSlice } from "../api/apiSlice";
import { addCategory } from "./AdminSlice";

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
    }),
});

export const { useCreateCategoryMutation,useGetCategoryMutation,useCreateProductsMutation } = adminAPI;
