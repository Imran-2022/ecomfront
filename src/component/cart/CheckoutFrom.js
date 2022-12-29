import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useCreatePaymentIntentMutation } from '../../features/payment/paymentApi';
import { useGetCartItemMutation } from "../../features/cart/cartApi"

const CheckoutFrom = ({ getTotalCost }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cartError, setCartError] = useState("")
    const [success, setSuccess] = useState("")
    const [clientSecret, setClientSecret] = useState("");
    const [createPaymentIntent, { data, isSuccess, isLoading, error, isError }] = useCreatePaymentIntentMutation()
    const [getCartItem] = useGetCartItemMutation();


   
    useEffect(() => {
        getCartItem()
    }, [getCartItem])

    useEffect(() => {
        createPaymentIntent({ price: getTotalCost })
    }, [createPaymentIntent, getTotalCost])

    if (error) console.log(error)

    useEffect(() => {
       if(data?.clientSecret) setClientSecret(data.clientSecret)
    }, [data])


 const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCartError(error?.message || "")

        setSuccess("")
        // comfirm card Payment !!!!!

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: 'Md Imranul Haque',
                  email:'mdimranulhaque@gmail.com'
                },
              },
            },
          );

          if(intentError) {
            setCartError(intentError.message)
          }else{
            setCartError("")
            console.log(paymentIntent,"paymentIntent")
            setSuccess(`Congrats ! Your $ ${paymentIntent.amount} Payment Is completed `)
          }

    }

    return (
        <form onSubmit={handleSubmit} className='pt-5'>
            <CardElement className='py-3 px-1 border border-red-400'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button  type="submit" disabled={!stripe|| !clientSecret}>
                Pay
            </button>
            {
                cartError && <p>{cartError}</p>
            }
            {
                success && <p className='text-red-500 font-bold'>{success}</p>
            }
        </form>
    );
};

export default CheckoutFrom;