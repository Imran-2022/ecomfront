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
        login: builder.mutation({
            query: (data) => ({
                url: "/api/user/sign-in",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.token
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        verifyEmail: builder.mutation({
            query: (data) => ({
                url: "/api/user/verify-email",
                method: "PUT",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.token
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        resetEmail: builder.mutation({
            query: (email) => ({
                url: `/api/user/forgot-password/${email}`,
                method: "PUT",
            }),
        }),
        resetPassword: builder.mutation({
            query: ({new_password,npassword}) => ({
                url: `/api/user/${npassword}/reset-password`,
                method: "PUT",
                body: {new_password},
            }),
        }),
    }),
});

export const { useCreateCategoryMutation,useGetCategoryMutation } = adminAPI;
