import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterPrice } from '../../features/filter/filterSlice';

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("")
  const pricseFilter = useSelector((state) => state.filter);

  const { products } = useSelector((state) => state.admin);
  const MaxValue = Math.max(...products?.map(dt => dt.price))
  const MinValue = Math.min(...products?.map(dt => dt.price))
  useEffect(() => {
    setPrice((pricseFilter?.filterPrice))
  }, [])
  return (
    <div>
      <p>Filter By Price</p>
      <input type="range" list="tickmarks" value={price} min={MinValue} max={MaxValue} onChange={e => setPrice(e.target.value)} className="w-full" />
      <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => dispatch(addFilterPrice(price))}>Filter</button> 
      {
        MinValue&& MaxValue && <span>Price: ${MinValue} — ${price?price:MaxValue}</span>
      }
    </div>
  );
};

export default FilterByPrice;