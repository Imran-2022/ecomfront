import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../Layout';

const Register = () => {
    console.log("object");

    return (
        <Layout title="Register Page" className=''>

            <div className="flex flex-col items-center justify-center w-full h-full py-11  text-gray-700">
                
                {/* bg-gray-200 removed */}

                <form className="flex flex-col bg-white rounded shadow-lg p-12 my-12" action="">

                    <label className="font-semibold text-xs" htmlFor="usernameField">User name</label>

                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />

                    <label className="font-semibold text-xs mt-3" htmlFor="usernameField">User Email</label>

                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />

                    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>

                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />

                    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">ComFirm Password</label>

                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />

                    <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Register</button>

                    <div className="flex mt-6 justify-center text-xs">
                        <p>Already Have an account ? </p>
                        <span className="mx-2 text-gray-300">/</span>
                        <Link to="/login" className="text-blue-400 hover:text-blue-500" href="#">Login</Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Register;