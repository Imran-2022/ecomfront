import React, { useCallback} from 'react';
import { useDispatch } from 'react-redux';

import { addSearch } from '../../features/filter/filterSlice';

const SearchProduct = () => {
  const dispatch = useDispatch();
  const debounce = (func) => {
    let timer;
    return function (...argu) {
        const context = this;
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            func.apply(context, argu)
        }, 500)
    }
}

   const HandleSearch = (event) => {
    const { value } = event.target;
    dispatch(addSearch(value))
}

//useCallback provides us the memoizd callback

const optimizedVersion =useCallback(debounce(HandleSearch),[])
  
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" onChange={optimizedVersion} className="py-2 font-bold text-sm  bg-orange-300  rounded-md pl-10 focus:outline-orange-300 focus:bg-white focus:text-gray-900 text-white" placeholder="Search..." autoComplete="off" />
    </div>
  );
};

export default SearchProduct;