import React, { useState } from 'react';
import { useCreateCategoryMutation } from '../features/product/adminAPI';

const CreateCategoryDashboard = () => {
    const [inputs, setInputs] = useState("")
    const [createCategory, { data, isLoading, error: responseError, isSuccess }] = useCreateCategoryMutation();

    const createNewCategory=(e)=>{
        e.preventDefault();
        createCategory({name:inputs})
    }
    return (
        <div >
            <label className="block mb-3">
                <span className="text-gray-700">Write Category Name</span>
                <input
                    autoFocus={true}
                    name="name"
                    type="text"
                    className="
                        border
                        focus:outline-none
                        font-semibold
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
                    placeholder="category name here"
                    value={inputs} onChange={e => setInputs(e.target.value)}
                />
            </label>
            <button className='p-2 bg-blue-100 w-full rounded font-semibold text-red-500  hover:bg-blue-200' disabled={!inputs} onClick={createNewCategory}>Create Category</button>
            {isSuccess&&<p className='text-red-400 font-bold'>created successfully !</p>}
                {responseError&&<p className='text-red-400 font-bold'>error !</p>}
        </div>
    );
};

export default CreateCategoryDashboard;