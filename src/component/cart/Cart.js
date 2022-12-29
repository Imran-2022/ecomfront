import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetCartItemMutation } from '../../features/cart/cartApi';
import { addPromoCode } from '../../features/cart/cartSlice';
import Layout from '../../Layout';
import CartItem from './CartItem';

const Cart = () => {
    const { cart, promoCode } = useSelector((state) => state.cart)
    const [prom,setProm]=useState("")
    const [getCartItem, { data, isLoading, error: responseError, isSuccess }] = useGetCartItemMutation();
    const dispatch=useDispatch()
    useEffect(() => {
        getCartItem()
    }, [getCartItem])


    //  get total product count 

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += Number(item.count)
        })
        return total
    }


    // Get Total .... 
    const getTotalCost = () => {
        let total = cart.map(dt => dt.price * dt.count).reduce((a, b) => a + b, 0)
        if (promoCode == "2023") {
            return Math.ceil(total * 0.9)
        }
        return Math.ceil(total)
    }
    // handle Promo-Code 
    const [promoMessage,setPromoMessage]=useState("")
    const handlePromo = () => {
        if(prom=="2023"){
            dispatch(addPromoCode(prom))
            setProm("")
            setPromoMessage("applied")
        }else{
            setProm("")
            setPromoMessage("invalid")
        }
    }

    return (
        <Layout title="cart Page" className='mx-64'>

            <div className="bg-gray-100">
                <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{cart ? cart.length : "loading"} Items</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                            </div>
                            {
                                isLoading && <p>Is Loading !!</p>
                            }
                            {
                                responseError && <p>{responseError?.data}</p>
                            }

                            {
                                cart && cart.map((dt, idx) => <CartItem key={idx} dt={dt} />)
                            }


                            <Link to="/store" className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </Link>
                        </div>

                        <div id="summary" className="w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Products : {getTotalQuantity()}</span>
                                <span className="font-semibold text-sm">${getTotalCost()}</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>Standard shipping - $10.00</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase" >Promo Code</label>
                                <input type="text" value={prom} onChange={e=>setProm(e.target.value)}  id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                            </div>
                            <button disabled={!prom||promoMessage=="applied"} className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={handlePromo}>Apply</button> <span>{!prom&&promoMessage}</span>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>${getTotalCost() + 10}</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Layout>
    );
};

export default Cart;