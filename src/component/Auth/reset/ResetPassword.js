import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
	return (
			<div class="flex flex-col items-center justify-center w-full h-screen bg-gray-200 text-gray-700">

				<div class="w-full sm:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					<div class="px-8 mb-4 text-center">
						<h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
						<p class="mb-4 text-sm text-gray-700">
							We get it, stuff happens. Just enter your email address below and we'll send you a
							link to reset your password!
						</p>
					</div>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
								Email
							</label>
							<input
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Enter Email Address..."
							/>
						</div>
						<div class="mb-6 text-center">
							<button
								class="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Reset Password
							</button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<Link to="/register"
								class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								href="./register.html"
							>
								Create an Account!
							</Link>
						</div>
						<div class="text-center">
							<Link to="/login"
								class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								href="./index.html"
							>
								Already have an account? Login!
							</Link>
						</div>
					</form>
				</div>
			</div>
	);
};

export default ResetPassword;