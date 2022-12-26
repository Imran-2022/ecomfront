import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/api/user/sign-up",
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

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.token,
                            user: result.data.user,
                        })
                    );
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

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.token,
                            user: result.data.user,
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

export const { useLoginMutation, useRegisterMutation, useVerifyEmailMutation, useResetEmailMutation, useResetPasswordMutation } = authApi;
