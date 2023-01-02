import React, { useEffect, useState } from 'react';
import { useCreateProductsMutation, useGetCategoryMutation } from '../features/product/adminAPI';

const CreateProductDashboard = () => {

    const [getCategory, { data, isLoading, error: responseError, isSuccess }] = useGetCategoryMutation();
    const [createProducts, { data: product, isLoading: gd, error: responseErro, isSuccess: ss }] = useCreateProductsMutation();

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        formData: '',
    });

    const {
        name,
        description,
        price,
        category,
        cagegories,
        quantity,
        formData,
    } = values;

    useEffect(() => {
        getCategory()
        setValues({
            formData: new FormData()
        })
    }, [])
    const handleChange = (e) => {
        const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value)
        setValues({
            ...values,
            [e.target.name]: value,
        })

    }

    const handleSubmit = (e) => {
        console.log("object");
        e.preventDefault();
        createProducts(formData)
    }

    return (
        <form className="capitalize" onSubmit={handleSubmit}>
            <p className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>choose a photo</p>
            <input 
                className=' cursor-pointer border
                    focus:outline-none
                    font-semibold
                    p-2
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50"' 
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    accept="image/*"
                    required
                    />
            <label className="block my-2">
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</span>
                <input
                    className="
                    border
                    focus:outline-none
                    text-sm
                    mt-3
                    p-2
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50"
                    placeholder="product name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    value={name}
                    required
                />
            </label>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">product description</label>
            <textarea id="message" rows="4" className=" block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none   focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-3 min-h-[15vh]" placeholder="Write product description here..." 
                  name="description"
                  onChange={handleChange}
                  value={description}
                  required
                ></textarea>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Category</label>
            <select id="countries" name="category" value={category} onChange={handleChange} required className=" border
                    focus:outline-none
                    text-sm
                    mt-3
                    p-2
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50 mb-2">
                <option  value="">click here to Choose here 🐸</option>
                {
                    data && data.map(item => (<option value={item._id} key={item._id}>{item.name}</option>))
                }
            </select>
            <div className='grid grid-cols-2 gap-3 justify-between mb-5'>
                <label className="block my-2">
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</span>
                    <input
                        className="
                    border
                    focus:outline-none
                    text-sm
                    mt-3
                    p-2
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50"
                    name="price"
                    onChange={handleChange}
                    type="number"
                    value={price}
                    required
                    />
                </label>
                <label className="block my-2">
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Quantity</span>
                    <input
                        className="
                    border
                    focus:outline-none
                    text-sm
                    mt-3
                    p-2
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50"
                    name="quantity"
                    onChange={handleChange}
                    type="number"
                    value={quantity}
                    required
                    />
                </label>
            </div>
            <button className='p-2 bg-blue-100 w-full rounded font-semibold text-red-500  hover:bg-blue-200' type='submit'>Create new product</button>
            {ss && alert('yea, successfully uploaded new product !')}
        </form>
    );
};

export default CreateProductDashboard;