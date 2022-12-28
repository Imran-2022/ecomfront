import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch,addFilterCategory,addFilterPrice } from '../../features/filter/filterSlice';
const ResetFilter = () => {
    const dispatch = useDispatch();
    const hanldeReset=()=>{
        dispatch(addSearch(""))
        dispatch(addFilterCategory(""))
        dispatch(addFilterPrice(""))
    }
    return (
        <div>
             <button type="button" className="inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full" onClick={hanldeReset}>RESET ALL FILTER</button> 
        </div>
    );
};

export default ResetFilter;