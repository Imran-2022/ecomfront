import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAddnewProfileMutation, useGetProfileMutation } from '../../features/profile/profileApi';
import Layout from '../../Layout';

const Shipping = () => {
  const navigate=  useNavigate()

    const [getProfile, { data, isLoading, isError, isSuccess }] = useGetProfileMutation();
    const [addnewProfile, { data: pdata, isLoading: pisLoading, isError: pisError, isSuccess: pisSuccess }] = useAddnewProfileMutation();
    const { profile: { user, phone, address1, address2, city, state, postCode, country } } = useSelector(state => state.profile)

    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        postCode: "",
        country: "",
    });
    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        setInputs({
            name: user?.name,
            phone,
            address1,
            address2,
            city,
            state,
            postCode,
            country,
        })
    }, [address1, address2, city, country, phone, postCode, state,user?.name])

    const handleChange = (e) => {
        setInputs((preValue) => ({ ...preValue, [e.target.name]: e.target.value }))
    }

    // hanlde shipping informatin -----------

    const handleShapping = () => {
        console.log(inputs, "inputssssssssss");
        addnewProfile(inputs)
    if (address1) navigate('/checkout')
    }
    return (
        <Layout title="shipping page" className=" bg-[#f5f7f9] min-h-[92vh] grid items-center">
            <div className='mx-64 '>
            <div className="py-6">
                <div className="p-6 border bg-slate-50 border-gray-300 sm:rounded-md">
                    <form onSubmit={e => e.preventDefault()} className="capitalize">
                        <div className='flex flex-wrap gap-5 justify-around'>
                            <div>
                                <label className="block mb-6">
                                    <span className="text-gray-700">Your name</span>
                                    <input
                                        name="name"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                        p-2
                                        block
                                        w-full
                                        mt-1
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50"
                                        placeholder="Joe Bloggs"
                                        value={inputs.name} onChange={handleChange}
                                    />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700">Address line 1</span>
                                    <input
                                        name="address1"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                        p-2
                                        block
                                        w-full
                                        mt-1
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50"
                                        placeholder=""
                                        value={inputs.address1} onChange={handleChange} required
                                    />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700">Address line 2</span>
                                    <input
                                        name="address2"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                            p-2 
                                            block
                                            w-full
                                            mt-1
                                            border-gray-300
                                            rounded-md
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
          "
                                        placeholder=""
                                        value={inputs.address2} onChange={handleChange} required
                                    />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700">City</span>
                                    <input
                                        name="city"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                            p-2
                                            block
                                            w-full
                                            mt-1
                                            border-gray-300
                                            rounded-md
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
          "
                                        placeholder=""
                                        value={inputs.city} onChange={handleChange} required
                                    />
                                </label>

                            </div>
                            <div>
                                <label className="block mb-6">
                                    <span className="text-gray-700">State/Province</span>
                                    <input
                                        name="state"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                            p-2
                                            block
                                            w-full
                                            mt-1
                                            border-gray-300
                                            rounded-md
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
          "
                                        placeholder=""
                                        value={inputs.state} onChange={handleChange} required
                                    />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700">Zip/Postal code</span>
                                    <input
                                        name="postCode"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                            p-2
                                            block
                                            w-full
                                            mt-1
                                            border-gray-300
                                            rounded-md
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
          "
                                        placeholder=""
                                        value={inputs.postCode} onChange={handleChange} required
                                    />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700">Country</span>
                                    <input
                                        name="country"
                                        type="text"
                                        className="
                                        border
                                        focus:outline-none
                                        font-semibold
                                                p-2
                                                block
                                                w-full
                                                mt-1
                                                border-gray-300
                                                rounded-md
                                                shadow-sm
                                                focus:border-indigo-300
                                                focus:ring
                                                focus:ring-indigo-200
                                                focus:ring-opacity-50
          "
                                        placeholder=""
                                        value={inputs.country} onChange={handleChange} required
                                    />
                                </label>
                                <label className="block mb-6 ">
                                    <span className="text-gray-700">mobile/telephone</span>
                                    <input
                                        name="phone"
                                        type="text"
                                        className="
                                                border
                                                focus:outline-none
                                                font-semibold
                                                p-2
                                                block
                                                w-full
                                                mt-1
                                                border-gray-300
                                                rounded-md
                                                shadow-sm
                                                focus:border-indigo-300
                                                focus:ring
                                                focus:ring-indigo-200
                                                focus:ring-opacity-50
          "
                                        placeholder=""
                                        value={inputs.phone} onChange={handleChange} required
                                    />
                                </label>
                            </div>
                        </div>


                        <div className="my-6 text-center">
                            <button
                            disabled={pisLoading}
                                onClick={handleShapping}
                                className="
                                    w-5/12
                                    h-10
                                    focus:shadow-outline
                                    inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
                                "
                            >
                                {/* <Link to="/checkout">SAVE and CHECKOUT</Link> */}
                                SAVE and CHECKOUT

                            </button>

                        </div>
                        <div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </Layout>
    );
};

export default Shipping;