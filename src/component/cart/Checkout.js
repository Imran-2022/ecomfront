import React from 'react';
import Layout from '../../Layout';

const Checkout = () => {
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
								<select className="text-sm font-medium focus:outline-none -ml-1" name="" id="">
									<option value="">Product (Billed Monthly)</option>
									<option value="">Product (Billed Annually)</option>
								</select>
								<span className="text-sm ml-auto font-semibold">$20</span>
								<span className="text-xs text-gray-500 mb-px">/mo</span>
							</div>
							<span className="text-xs text-gray-500 mt-2">Save 20% with annual billing</span>
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
						</div>
					</div>
				</div>
			</div>

		</Layout>
	);
};

export default Checkout;