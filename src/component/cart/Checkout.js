import React from 'react';
import { useSelector } from 'react-redux';
import { loadStripe} from '@stripe/stripe-js';
import {Elements } from '@stripe/react-stripe-js'
import Layout from '../../Layout';
import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe('pk_test_51LQPBwIORs89t3JLek7c1o26vLIUfnfMApeyywBC1BVsvxzr6i8hPiY9gZWbd66a3OEXQI4E7kuEjppB1H1Dv3xj00QJsLwfgm');

const Checkout = () => {
	const { cart, promoCode } = useSelector((state) => state.cart);


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
	return (
		<Layout title="checkout page" className="mx-64 my-20">

			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
				<div className="lg:col-span-2">
					<h2 className="text-sm font-medium">Payment Method</h2>
					<div className="bg-white rounded mt-4 shadow-lg">
						<div className="flex items-center px-8 py-5">
							<input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100" type="radio" />
							<label className="text-sm font-medium ml-4">PayPal</label>
						</div>
						<div className="border-t">
							<div className="flex items-center px-8 py-5">
								<input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600" type="radio" />
								<label className="text-sm font-medium ml-4">Credit Card</label>
							</div>
							<div className="grid grid-cols-2 gap-4 px-8 pb-8">
								<div className="col-span-2">
									<label className="text-xs font-semibold" for="cardNumber">Card number</label>
									<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="0000 0000 0000 0000" />
								</div>
								<div className="">
									<label className="text-xs font-semibold" for="cardNumber">Expiry Date</label>
									<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="MM/YY" />
								</div>
								<div className="">
									<label className="text-xs font-semibold" for="cardNumber">CVC/CVV</label>
									<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-sm font-medium">Purchase Summary</h2>
					<div className="bg-white rounded mt-4 shadow-lg py-6">
						<div className="px-8">
							<div className="flex items-end">
								<p className='"text-sm font-medium focus:outline-none -ml-1" '>Product</p>
								<span className="text-sm ml-auto font-semibold">${getTotalCost()}</span>
								<span className="text-xs text-gray-500 mb-px">/mo</span>
							</div>
							<span className="text-xs text-gray-500 mt-2">total <span className='text-red-700 font-bold'>{getTotalQuantity()}</span> product you chose.</span>
						</div>
						<div className="px-8 mt-4">
							<div className="flex items-end justify-between">
								<span className="text-sm font-semibold">Tax</span>
								<span className="text-sm text-gray-500 mb-px">10%</span>
							</div>
						</div>
						<div className="px-8 mt-4 border-t pt-4">
							<div className="flex items-end justify-between">
								<span className="font-semibold">Today you pay (AUD)</span>
								<span className="font-semibold">$0</span>
							</div>
							<span className="text-xs text-gray-500 mt-2">After 1 month free: $22/mo.</span>
						</div>
						<div className="flex items-center px-8 mt-8">
							<input id="termsConditions" type="checkbox" />
							<label className="text-xs text-gray-500 ml-2 underline" for="termsConditions">I agree to the terms and conditions.</label>
						</div>
						<div className="flex flex-col px-8 pt-4">
							<button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">Make Payment !</button>
							{/* <button className="text-xs text-blue-500 mt-3 underline">Have a coupon code?</button> */}

							{/* payment */}

							<Elements stripe={stripePromise}>
								<CheckoutFrom getTotalCost={getTotalCost()} />
							</Elements>
						</div>
					</div>
				</div>
			</div>

		</Layout>
	);
};

export default Checkout;