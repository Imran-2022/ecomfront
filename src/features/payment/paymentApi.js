import { apiSlice } from "../api/apiSlice";
import { getPaymentCompletedProduct } from "./paymentSlice";

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
            query: (data) => ({
                url: "/api/payment",
                method: "POST",
                body:data
            }),
        }),
        getPaymentCompletedProducts: builder.mutation({
            query: () => ({
                url: "/api/payment",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(getPaymentCompletedProduct(result?.data))

                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useAddPaymentCompletedProductToDSMutation,useCreatePaymentIntentMutation,useGetPaymentCompletedProductsMutation } = paymentApi;
