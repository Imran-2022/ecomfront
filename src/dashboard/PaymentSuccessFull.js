import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetPaymentCompletedProductsMutation } from '../features/payment/paymentApi';

const PaymentSuccessFull = () => {
    const [getPaymentCompletedProducts, { data, isSuccess, isLoading, isError, error }] = useGetPaymentCompletedProductsMutation()
    const { paymentCompleted } = useSelector(state => state.payment)
    useEffect(() => {
        getPaymentCompletedProducts()
    }, [])

    if (isLoading) return <p>isLoading </p>
    if (isError) return <p>is Error</p>
    if (data) console.log(data)

    return (
        <div>
            <p>Your payment History is here !!!! GoodLuck ....</p>
            {
                paymentCompleted && paymentCompleted.map(dt =>
                    <div className='bg-slate-400 p-4 m-3'>
                        <p>transationId : {dt.transationId}</p>
                        {
                            dt.productDetails.map(dt => <div>
                                <p>product:{dt.product.name},price: {dt.price}, count: {dt.count}</p>
                            </div>)
                        }
                        <p>Total Price : {dt.totalAmount}</p>
                        <p>userID : {dt.user}</p>
                    </div>
                )
            }
        </div>
    );
};

export default PaymentSuccessFull;