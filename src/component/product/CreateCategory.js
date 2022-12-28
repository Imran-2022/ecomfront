import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateCategoryMutation } from '../../features/product/adminAPI';

const CreateCategory = () => {
    const [category,setCategory]=useState("")

    const [createCategory, { data, isLoading, error: responseError, isSuccess }] = useCreateCategoryMutation();

    const handleSubmit=(e)=>{
        e.preventDefault();
        createCategory({name:category})
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-f  text-gray-700">
        
            <form className="flex flex-col bg-white rounded shadow-lg p-12 my-12 " action="" onSubmit={handleSubmit}>
                <label className="font-semibold text-xs" htmlFor="category">write category name</label>

                <input className="flex items-center h-12 px-4 w-64 border shadow mt-2 rounded focus:outline-none focus:ring-2" type="text" name="category" value={category} onChange={e=>setCategory(e.target.value)} required />

                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" disabled={!category}>Create Category</button>
                {isSuccess&&<p className='text-red-400 font-bold'>created successfully !</p>}
                {responseError&&<p className='text-red-400 font-bold'>error !</p>}
            </form>
        </div>
    );
};

export default CreateCategory;