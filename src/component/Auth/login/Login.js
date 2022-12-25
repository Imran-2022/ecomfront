import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../Layout';

const Login = () => {
    return (
        <Layout title="Login Page" className=''>
        <div class="flex flex-col items-center justify-center w-full h-screen bg-gray-200 text-gray-700">
            <form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                <label class="font-semibold text-xs" for="usernameField">Username or Email</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                <button class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
                <div class="flex mt-6 justify-center text-xs">
                    <Link to="/forget-password" class="text-blue-400 hover:text-blue-500" href="#">Forgot Password</Link>
                    <span class="mx-2 text-gray-300">/</span>
                    <Link to="/register" class="text-blue-400 hover:text-blue-500" href="#">Register</Link>
                </div>
            </form>
        </div>
        </Layout>
    );
};

export default Login;


// this login page desgin from  - https://codepen.io/robstinson/pen/qBaEvwL