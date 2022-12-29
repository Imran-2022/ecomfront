import { apiSlice } from "../api/apiSlice";
import { addProfile } from "./profileSlice";

export const profileApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        addnewProfile: builder.mutation({
            query: (data) => ({
                url: "/api/profile",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(addProfile(result))

                } catch (err) {
                    // do nothing
                }
            },
        }),
        getProfile: builder.mutation({
            query: () => ({
                url: "/api/profile",
                method: "GET",
            }),
       
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            try {
                const result = await queryFulfilled;
                dispatch(addProfile(result))

            } catch (err) {
                // do nothing
            }
        }, 
    }),
    }),

});

export const { useAddnewProfileMutation, useGetProfileMutation } = profileApi;
