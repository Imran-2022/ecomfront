import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation({
            query: (data) => ({
                url: "/api/payment/create-payment-intent",
                method: "POST",
                body: data,
            }),
        }),
        addPaymentCompletedProductToDS: builder.mutation({
            query: () => ({
                url: "/api/profile",
                method: "GET",
            }),
        }),
    }),
});

export const { useAddPaymentCompletedProductToDSMutation,useCreatePaymentIntentMutation } = paymentApi;
