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
        <p className='py-1'>Filter By Price -</p>
        <input type="range" list="tickmarks" value={price} min={MinValue} max={MaxValue} onChange={e => setPrice(e.target.value)} className="w-full" />
        <div className='flex flex-row gap-3 justify-between items-center my-3'>
          <button type="button" className="inline-block bg-blue-600 text-white py-0.5 px-6 font-bold" onClick={() => dispatch(addFilterPrice(price))}>Filter</button>
          <div>
            {
              MinValue && MaxValue && <span>${MinValue} — ${price ? price : MaxValue}</span>
            }
          </div>
        </div>

      </div>
  );
};

export default FilterByPrice;