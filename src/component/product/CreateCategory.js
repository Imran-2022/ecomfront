import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateCategory = () => {
    const [category,setCategory]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(category)
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200 text-gray-700">
            <button className="flex items-center justify-center h-12 px-6 w-22 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"><Link to="/dashboard">Back to Dashboard</Link></button>
            <form className="flex flex-col bg-white rounded shadow-lg p-12 my-12 " action="" onSubmit={handleSubmit}>
                <label className="font-semibold text-xs" htmlFor="category">write category name</label>

                <input className="flex items-center h-12 px-4 w-64 border shadow mt-2 rounded focus:outline-none focus:ring-2" type="text" name="category" value={category} onChange={e=>setCategory(e.target.value)} required />

                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" disabled={!category}>Create Category</button>
            </form>
        </div>
    );
};

export default CreateCategory;