import React from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
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
		<Layout title="checkout page" className="  ">
			<div className='bg-[#f5f7f9] min-h-[92vh]'>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg py-20 mx-64 capitalize">
					<div className="lg:col-span-2">
						<h2 className="text-sm font-medium">Your Info : </h2>
						<div className="bg-white rounded mt-4 shadow-lg">
							<div className="flex flex-col  px-8 pt-5">
								<div className='flex items-center'>
									<input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 bg-blue-600 ring-blue-600 ring-opacity-100" type="radio" />
									<label className="text-sm font-medium ml-2">Your Info</label>
								</div>
								<div className='p-2 mt-1'>
									<p>Name : {"imranul haque"}</p>
									<p>Contact : {"01771207845"}</p>
									<p>email : {"mdimranulhaque@gmail.com"}</p>
								</div>
							</div>
							<div className="">
								<div className="flex items-center px-8 py-5">
									<input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600" type="radio" />
									<label className="text-sm font-medium ml-2">Your products</label>
								</div>
								<div className="grid grid-cols-3 gap-4 px-8 pb-8">
									{

										cart && cart.map((dt, idx) => <div>
											<p>{idx + 1}.{dt.product?.name}={dt.count}</p>
										</div>
										)
									}

								</div>
								<div className='flex gap-3 font-semibold p-3 border-t justify-between px-6'>
									<p>total count : <span className='text-red-400 font-bold'>{getTotalQuantity()}</span></p>
									<p>Total price : <span className='text-red-400 font-bold'>{getTotalCost()} $</span> </p>
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
									<span className="text-sm ml-auto font-semibold">{getTotalCost()} $</span>
								</div>
								<span className="text-xs text-gray-500 mt-2">total <span className='text-red-700 font-bold'>{getTotalQuantity()}</span> product you chose.</span>
							</div>
							<div className="px-8 mt-4">
								<div className="flex items-end justify-between">
									<span className="text-sm font-semibold">Tax(no tax toay)</span>
									<span className="text-sm text-gray-500 mb-px">0 %</span>
								</div>
							</div>
							<div className="px-8 mt-4 border-t pt-4">
								<div className="flex items-end justify-between">
									<span className="font-semibold">Today you pay ($)</span>
									<span className="font-semibold">{getTotalCost()} $</span>
								</div>
							</div>
							<div className="flex flex-col px-8 pt-4">
								{/* payment */}
								<Elements stripe={stripePromise}>
									<CheckoutFrom getTotalCost={getTotalCost()} />
								</Elements>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Layout>
	);
};

export default Checkout;