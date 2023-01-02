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
            <p className='underline ml-3'>Your latest 5 payment History is here !!</p>
            {
                paymentCompleted && paymentCompleted.map(dt =>
                    <div className='p-4 m-3 shadow border-2 '>
                        <div className='flex justify-between gap-4'>
                            <p>transationId : {dt.transationId}</p>
                            <p>Total Price : {dt.totalAmount}</p>
                        </div>
                        {
                            dt.productDetails.map(dt => <div>
                                <p>product:{dt.product.name},price: {dt.price}, count: {dt.count}</p>
                            </div>)
                        }
                    </div>
                ).reverse().slice(0, 4)
            }
        </div>
    );
};

export default PaymentSuccessFull;